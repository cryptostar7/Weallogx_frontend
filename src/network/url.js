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
    case 'clients':
      return `${baseUrl}/auth/clients/`;
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
    case 'scenario-detail-templates':
      return `${baseUrl}/auth/template-sceneriodetails/`;
    case 'scenario-schedule-templates':
      return `${baseUrl}/auth/template-schedule/`;
    case 'schedule':
      return `${baseUrl}/auth/schedule/`;
    case 'illustration':
      return `${baseUrl}/auth/illustration/`;
    case 'template-insurance-profile':
      return `${baseUrl}/auth/template-insurance-profile/`;
    case 'illustration-id':
      return `${baseUrl}/auth/illustrationid/`;
    case 'illustration-template':
      return `${baseUrl}/auth/template-exsiting-illustration/`;
    case 'pdf_extract':
      return `${baseUrl}/pdf/extract/`;
    case 'vehicle-type1':
      return `${baseUrl}/auth/template-vehicle1/`;
    case 'vehicle-type2':
      return `${baseUrl}/auth/template-vehicle2/`;
    case 'vehicle-type3':
      return `${baseUrl}/auth/template-vehicle3/`;
    case 'vehicles-templates':
      return `${baseUrl}/auth/vehicle-template/`;
    case 'vehicle-portfolio':
      return `${baseUrl}/auth/vehicle-portfolio/`;
    case 'comparative':
      return `${baseUrl}/auth/comperative/`
    case 'existing-comparative':
      return `${baseUrl}/auth/exisiting-comperative/`
    case 'historical':
      return `${baseUrl}/auth/historical/`;
    case 'historical-template':
      return `${baseUrl}/auth/indexstrategy-template/`;
    case 'historical-portfolio':
      return `${baseUrl}/auth/historical-portfolio/`;
    case 'historical-simulation-object':
      return `${baseUrl}/auth/historical-media/`
    case 'strategy-index1':
      return `${baseUrl}/auth/indexstrategy1/`;
    case 'strategy-index2':
      return `${baseUrl}/auth/indexstrategy2/`;
    case 'strategy-index3':
      return `${baseUrl}/auth/indexstrategy3/`;
    case 'report':
      return `${baseUrl}/report/`
    case 'add-report':
      return `${baseUrl}/report/`
    case 'latest-report':
      return `${baseUrl}/report/latest-report/`
    case 'comparative_report':
      return `${baseUrl}/report/calc/`
    case 'comparative_report_longevity':
      return `${baseUrl}/report/longegivity/`
    case 'comparative_report_ending_value':
      return `${baseUrl}/report/surrender/`
    case 'comparative_report_death_benefit':
      return `${baseUrl}/report/death/`
    case 'comparative_report_longevity_ror':
      return `${baseUrl}/report/longevity-ror/`
    case 'comparative_report_ending_value_ror':
      return `${baseUrl}/report/surrender-ror/`
    case 'comparative_report_death_benefit_ror':
      return `${baseUrl}/report/death-ror/`
    case 'notes':
      return `${baseUrl}/report/add-note/`
    case 'disclosures':
      return `${baseUrl}/report/add-disclosure/`
    case 'historical_report':
      return `${baseUrl}/historical/`
    default:
      return baseUrl;
  }
};


