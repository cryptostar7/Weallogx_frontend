const getBaseUrl = () => import.meta.env.VITE_API_BASE_URL;

export const getUrl = (type) => {
  const baseUrl = getBaseUrl();
  // const baseUrl = 'http://wlxpy.bizbybot.com';

  switch (type) {
    case 'signup':
      return `${baseUrl}/auth/register/`;
    case 'profile':
      return `${baseUrl}/auth/profile`;
    case 'login':
      return `${baseUrl}/auth/login/`;
    case 'current_plan':
      return `${baseUrl}/auth/current_plan/`;
    case 'client':
      return `${baseUrl}/auth/client/`;
    case 'change-password':
      return `${baseUrl}/auth/change_password/`;
    case 'forgot-password':
      return `${baseUrl}/auth/request-forget-email/`;
    case 'reset-password':
      return `${baseUrl}/auth/password-forget-complete`;
    case 'scenario':
      return `${baseUrl}/auth/scenario/`;
    case 'scenario-details':
      return `${baseUrl}/auth/sceneriodetails/`;
    case 'scenario-with-schedule_id':
      return `${baseUrl}/auth/scenerio-schedule/`;
    case 'existing-scenario-detail':
      return `${baseUrl}/auth/existing-scenario-details/`;
    case 'existing-scenario-schedule':
      return `${baseUrl}/auth/schedule/`;
    case 'logout':
      return `${baseUrl}/auth/logout/`;
    default:
      return baseUrl;
  }
};