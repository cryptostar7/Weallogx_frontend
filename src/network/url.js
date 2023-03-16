const getBaseUrl = () => import.meta.env.VITE_API_BASE_URL;

export const getUrl = (type) => {
  const baseUrl = getBaseUrl();
  // const baseUrl = 'http://wlxpy.bizbybot.com';

  switch (type) {
    case 'signup':
      return `${baseUrl}/auth/register/`;
    case 'user-exists':
      return `${baseUrl}/auth/user-exists/`;
    case 'profile':
      return `${baseUrl}/auth/profile`;
    case 'login':
      return `${baseUrl}/auth/login/`;
    case 'current_plan':
      return `${baseUrl}/auth/current_plan/`;
    case 'logout':
      return `${baseUrl}/auth/logout/`;
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
      return `${baseUrl}/auth/scenariodetails/`;
    case 'scenario-with-schedule_id':
      return `${baseUrl}/auth/scenario-schedule/`;
    case 'existing-scenario-detail':
      return `${baseUrl}/auth/existing-scenario-details/`;
    case 'existing-scenario-schedule':
      return `${baseUrl}/auth/schedule/`;
    case 'schedule':
      return `${baseUrl}/auth/schedule/`;
    case 'illustration':
      return `${baseUrl}/auth/illustration/`;
    case 'existing-illustration':
      return `${baseUrl}/auth/existing-illustration/`;
    case 'illustration-id':
      return `${baseUrl}/auth/illustrationid/`;
    case 'illustration-template':
      return `${baseUrl}/auth/illustration-datalist`;
    case 'pdf_extract':
      return `${baseUrl}/pdf/extract/`;
    case 'vehicle-type1':
      return `${baseUrl}/auth/vehicle-type1/`;
    case 'vehicle-type2':
      return `${baseUrl}/auth/vehicle-type2/`;
    case 'vehicle-type3':
      return `${baseUrl}/auth/vehicle-type3/`;
    case 'existing-vehicletype':
      return `${baseUrl}/auth/existing-vehicletype/`;
    case 'comparative':
      return `${baseUrl}/auth/comperative/`
    case 'existing-comparative':
      return `${baseUrl}/auth/exisiting-comperative/`
    case 'historical':
      return `${baseUrl}/auth/historical/`
    default:
      return baseUrl;
  }
};

