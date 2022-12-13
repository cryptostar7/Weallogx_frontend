const getBaseUrl = () => import.meta.env.VITE_API_BASE_URL;

export const getUrl = (type) => {
  const baseUrl = getBaseUrl();
  switch (type) {
    case 'signup':
      return `${baseUrl}/auth/register/`;
    case 'profile':
      return `${baseUrl}/auth/profile`;
    case 'login':
      return `${baseUrl}/auth/login/`;
    case 'change-password':
      return `${baseUrl}/auth/password/change/`;
    case 'logout':
      return `${baseUrl}/auth/logout/`;
    default:
      return baseUrl;
  }
};
