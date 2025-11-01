/**
 * Authentication Service for WealthLogix
 *
 * Handles both Cognito and Django authentication based on VITE_COGNITO_ENABLED flag.
 *
 * When COGNITO_ENABLED=true:
 * - Uses Cognito endpoints (login-cognito, register-cognito, etc.)
 * - Stores Cognito JWT tokens (access, id, refresh)
 * - Supports MFA flow
 *
 * When COGNITO_ENABLED=false:
 * - Uses Django endpoints (login, register, etc.)
 * - Stores Django JWT tokens (access, refresh)
 * - Legacy authentication flow
 */

import { post } from '../network/requests'
import { getUrl } from '../network/url'
import { cognitoEnabled } from './amplify-config'

class AuthService {
  /**
   * Register a new user
   *
   * @param {Object} userData - User registration data
   * @param {string} userData.email - User email
   * @param {string} userData.password - User password
   * @param {string} userData.confirm_password - Password confirmation
   * @param {string} userData.first_name - First name
   * @param {string} userData.last_name - Last name
   * @param {string} userData.phone_number - Phone number
   * @param {string} userData.plan_type - Plan type
   * @param {string} userData.stripe_source_id - Stripe token
   * @param {string} userData.promo_code - Promo code (optional)
   * @param {string} userData.company_name - Company name (optional)
   * @returns {Promise} API response
   */
  async register(userData) {
    const endpoint = cognitoEnabled ? 'signup-cognito' : 'signup'
    const url = getUrl(endpoint)

    try {
      const response = await post(url, userData)

      if (cognitoEnabled) {
        // Cognito response includes verification_required flag
        return {
          ...response.data,
          verificationRequired: response.data.verification_required || false,
          cognitoEnabled: true
        }
      }

      return response.data
    } catch (error) {
      throw error
    }
  }

  /**
   * Verify email with Cognito verification code
   *
   * @param {string} email - User email
   * @param {string} code - 6-digit verification code
   * @returns {Promise} API response
   */
  async verifyEmail(email, code) {
    if (!cognitoEnabled) {
      throw new Error('Email verification is only available with Cognito')
    }

    const url = getUrl('email-verify-cognito')
    return await post(url, { email, code })
  }

  /**
   * Login user
   *
   * @param {Object} credentials - Login credentials
   * @param {string} credentials.email - User email
   * @param {string} credentials.password - User password
   * @param {boolean} credentials.remember_me - Remember me flag
   * @returns {Promise} API response with tokens and user data
   */
  async login(credentials) {
    const endpoint = cognitoEnabled ? 'login-cognito' : 'login'
    const url = getUrl(endpoint)

    try {
      const response = await post(url, credentials)

      if (response.data.status) {
        const data = response.data.data

        // Check if MFA is required (Cognito only)
        if (data.mfa_required) {
          return {
            mfaRequired: true,
            session: data.session,
            email: credentials.email,
            cognitoEnabled: true
          }
        }

        // Store tokens
        this.storeTokens(data.tokens, credentials.remember_me)

        return {
          ...response.data,
          cognitoEnabled
        }
      }

      return response.data
    } catch (error) {
      throw error
    }
  }

  /**
   * Verify MFA code (Cognito only)
   *
   * @param {Object} mfaData - MFA verification data
   * @param {string} mfaData.email - User email
   * @param {string} mfaData.mfa_code - 6-digit MFA code
   * @param {string} mfaData.session - MFA session token
   * @returns {Promise} API response with tokens
   */
  async verifyMFA(mfaData) {
    if (!cognitoEnabled) {
      throw new Error('MFA is only available with Cognito')
    }

    const url = getUrl('mfa-verify')

    try {
      const response = await post(url, mfaData)

      if (response.data.status) {
        const data = response.data.data

        // Store tokens from MFA response
        this.storeTokens({
          access: data.access_token,
          refresh: data.refresh_token,
          id_token: data.id_token
        }, false)

        return response.data
      }

      return response.data
    } catch (error) {
      throw error
    }
  }

  /**
   * Request password reset
   *
   * @param {string} email - User email
   * @returns {Promise} API response
   */
  async requestPasswordReset(email) {
    const endpoint = cognitoEnabled ? 'forgot-password-cognito' : 'forgot-password'
    const url = getUrl(endpoint)

    try {
      const response = await post(url, { email })
      return {
        ...response.data,
        cognitoReset: cognitoEnabled // Indicates if 6-digit code flow
      }
    } catch (error) {
      throw error
    }
  }

  /**
   * Confirm password reset
   *
   * For Cognito: Uses 6-digit code
   * For Django: Uses token link from email
   *
   * @param {Object} resetData - Password reset data
   * @param {string} resetData.email - User email (Cognito)
   * @param {string} resetData.confirmation_code - 6-digit code (Cognito)
   * @param {string} resetData.new_password - New password
   * @param {string} resetData.uidb64 - User ID base64 (Django)
   * @param {string} resetData.token - Reset token (Django)
   * @returns {Promise} API response
   */
  async confirmPasswordReset(resetData) {
    const endpoint = cognitoEnabled ? 'reset-password-cognito' : 'reset-password'
    const url = getUrl(endpoint)

    try {
      const response = await post(url, resetData)
      return response.data
    } catch (error) {
      throw error
    }
  }

  /**
   * Logout user
   *
   * Clears all tokens from localStorage and calls logout endpoint
   */
  async logout() {
    try {
      // Call backend logout endpoint (revokes session)
      const url = getUrl('logout')
      await post(url, {})
    } catch (error) {
      console.error('Logout API error:', error)
      // Continue with local cleanup even if API fails
    } finally {
      // Clear all auth data
      this.clearTokens()
    }
  }

  /**
   * Store authentication tokens in localStorage
   *
   * @param {Object} tokens - Authentication tokens
   * @param {string} tokens.access - Access token
   * @param {string} tokens.refresh - Refresh token
   * @param {string} tokens.id_token - ID token (Cognito only)
   * @param {boolean} rememberMe - Whether to persist login
   */
  storeTokens(tokens, rememberMe = false) {
    const now = new Date();

    if (tokens.access) {
      // Store access token in the format expected by getAccessToken() helper
      const baseTtl = 72 * 600000; // 12 hours (72 * 10 minutes)
      const extendedTtl = 7 * 24 * 60 * 60 * 1000; // 7 days
      const ttl = rememberMe ? extendedTtl : baseTtl;

      const accessTokenData = {
        value: tokens.access,
        expiry: now.getTime() + ttl,
        rememberMe: rememberMe
      };
      localStorage.setItem('access_token', JSON.stringify(accessTokenData))
    }

    if (tokens.refresh) {
      // Store refresh token in the format expected by getRefreshToken() helper
      const refreshTtl = 168 * 3600000; // 168 hours (7 days)
      const refreshTokenData = {
        value: tokens.refresh,
        expiry: now.getTime() + refreshTtl
      };
      localStorage.setItem('refresh_token', JSON.stringify(refreshTokenData))
    }

    // Cognito ID token (stored as plain string, not used by existing helpers)
    if (tokens.id_token) {
      localStorage.setItem('id_token', tokens.id_token)
    }

    if (rememberMe) {
      localStorage.setItem('remember', 'true')
    }

    // Store auth method for debugging
    localStorage.setItem('auth_method', cognitoEnabled ? 'cognito' : 'django')
  }

  /**
   * Clear all authentication tokens from localStorage
   */
  clearTokens() {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('plan_active')
    localStorage.removeItem('currentUser')
    localStorage.removeItem('remember')
    localStorage.removeItem('login_from_admin')
    localStorage.removeItem('auth_method')
  }

  /**
   * Get current access token
   *
   * @returns {string|null} Access token or null
   */
  getAccessToken() {
    const raw = localStorage.getItem('access_token')
    if (!raw) return null

    try {
      const parsed = JSON.parse(raw)
      // Check expiry
      if (parsed && parsed.expiry) {
        const now = new Date().getTime()
        if (now > parsed.expiry) {
          localStorage.removeItem('access_token')
          return null
        }
      }
      return parsed && parsed.value ? parsed.value : null
    } catch (e) {
      // If parsing fails, assume it's a plain token (backward compatibility)
      return raw
    }
  }

  /**
   * Get current refresh token
   *
   * @returns {string|null} Refresh token or null
   */
  getRefreshToken() {
    const raw = localStorage.getItem('refresh_token')
    if (!raw) return null

    try {
      const parsed = JSON.parse(raw)
      // Check expiry
      if (parsed && parsed.expiry) {
        const now = new Date().getTime()
        if (now > parsed.expiry) {
          localStorage.removeItem('refresh_token')
          return null
        }
      }
      return parsed && parsed.value ? parsed.value : null
    } catch (e) {
      // If parsing fails, assume it's a plain token (backward compatibility)
      return raw
    }
  }

  /**
   * Check if user is authenticated
   *
   * @returns {boolean} True if user has access token
   */
  isAuthenticated() {
    return !!this.getAccessToken()
  }

  /**
   * Get authentication method
   *
   * @returns {string} 'cognito' or 'django'
   */
  getAuthMethod() {
    return localStorage.getItem('auth_method') || (cognitoEnabled ? 'cognito' : 'django')
  }
}

// Export singleton instance
export default new AuthService()
