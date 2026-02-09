import * as Sentry from "@sentry/vue";

/**
 * Sentry utility functions for error reporting
 */

/**
 * Set user context for Sentry (useful for admin panel)
 */
export const setSentryUser = (user) => {
  Sentry.setUser({
    id: user.id,
    email: user.email,
    username: `${user.first_name} ${user.last_name}`,
    role: user.role_type || 'user',
    is_staff: user.is_staff,
    is_superuser: user.is_superuser
  });
};

/**
 * Add breadcrumb for admin actions
 */
export const addAdminBreadcrumb = (action, data = {}) => {
  Sentry.addBreadcrumb({
    message: `Admin action: ${action}`,
    category: 'admin',
    level: 'info',
    data: data
  });
};

/**
 * Report admin errors with context
 */
export const reportAdminError = (error, context = {}) => {
  Sentry.withScope((scope) => {
    scope.setTag('area', 'admin');
    scope.setLevel('error');
    scope.setContext('admin_context', context);
    Sentry.captureException(error);
  });
};