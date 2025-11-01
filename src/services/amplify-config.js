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

const amplifyConfig = {
  Auth: {
    Cognito: {
      // User Pool ID (e.g., "us-east-1_ZmXUDtXqa")
      userPoolId: import.meta.env.VITE_COGNITO_USER_POOL_ID,

      // Web App Client ID (public identifier, safe to expose)
      userPoolClientId: import.meta.env.VITE_COGNITO_WEB_CLIENT_ID,

      // AWS Region
      region: import.meta.env.VITE_COGNITO_REGION,

      // Cognito Domain for hosted UI (optional, for future OAuth)
      loginWith: {
        oauth: {
          domain: import.meta.env.VITE_COGNITO_DOMAIN,
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
const cognitoEnabled = import.meta.env.VITE_COGNITO_ENABLED === 'true'

if (cognitoEnabled) {
  console.log('✅ AWS Amplify configured for Cognito authentication')
  Amplify.configure(amplifyConfig)
} else {
  console.log('ℹ️ Cognito disabled - using Django authentication')
}

export { amplifyConfig, cognitoEnabled }
