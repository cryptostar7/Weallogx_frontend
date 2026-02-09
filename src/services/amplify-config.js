/**
 * AWS Amplify Configuration for Cognito Authentication
 *
 * This configuration connects the Vue.js frontend to AWS Cognito for authentication.
 *
 * Environment Variables (from .env.development):
 * - VITE_COGNITO_USER_POOL_ID: Cognito User Pool ID
 * - VITE_COGNITO_WEB_CLIENT_ID: Web App Client ID
 * - VITE_COGNITO_REGION: AWS Region
 * - VITE_COGNITO_DOMAIN: Cognito hosted UI domain
 * - VITE_COGNITO_ENABLED: Feature flag to enable/disable Cognito
 *
 * Cost: $0 - Amplify libraries are free npm packages
 *
 * Usage:
 * - Import this config in main.js: `import './services/amplify-config'`
 * - Amplify will be configured automatically when app starts
 */

import { Amplify } from 'aws-amplify'

// Get Cognito config - uses placeholders that get replaced at runtime by entrypoint.sh
// For local dev, Vite will replace these with import.meta.env values at build time
const getCognitoConfig = () => {
  // Try runtime replacement first (production), fallback to build-time env (local dev)
  const userPoolId = "__VITE_COGNITO_USER_POOL_ID__".startsWith("__VITE_")
    ? import.meta.env.VITE_COGNITO_USER_POOL_ID
    : "__VITE_COGNITO_USER_POOL_ID__"

  const webClientId = "__VITE_COGNITO_WEB_CLIENT_ID__".startsWith("__VITE_")
    ? import.meta.env.VITE_COGNITO_WEB_CLIENT_ID
    : "__VITE_COGNITO_WEB_CLIENT_ID__"

  const region = "__VITE_COGNITO_REGION__".startsWith("__VITE_")
    ? import.meta.env.VITE_COGNITO_REGION
    : "__VITE_COGNITO_REGION__"

  const domain = "__VITE_COGNITO_DOMAIN__".startsWith("__VITE_")
    ? import.meta.env.VITE_COGNITO_DOMAIN
    : "__VITE_COGNITO_DOMAIN__"

  const enabled = "__VITE_COGNITO_ENABLED__".startsWith("__VITE_")
    ? import.meta.env.VITE_COGNITO_ENABLED
    : "__VITE_COGNITO_ENABLED__"

  return { userPoolId, webClientId, region, domain, enabled }
}

const config = getCognitoConfig()

const amplifyConfig = {
  Auth: {
    Cognito: {
      // User Pool ID (e.g., "us-east-1_ZmXUDtXqa")
      userPoolId: config.userPoolId,

      // Web App Client ID (public identifier, safe to expose)
      userPoolClientId: config.webClientId,

      // AWS Region
      region: config.region,

      // Cognito Domain for hosted UI (optional, for future OAuth)
      loginWith: {
        oauth: {
          domain: config.domain,
          scopes: ['openid', 'email', 'profile'],
          redirectSignIn: [window.location.origin + '/'],
          redirectSignOut: [window.location.origin + '/login'],
          responseType: 'code'
        }
      }
    }
  }
}

// Configure Amplify if Cognito is enabled
const cognitoEnabled = config.enabled === 'true'

if (cognitoEnabled) {
  console.log('✅ AWS Amplify configured for Cognito authentication')
  Amplify.configure(amplifyConfig)
} else {
  console.log('ℹ️ Cognito disabled - using Django authentication')
}

export { amplifyConfig, cognitoEnabled }
