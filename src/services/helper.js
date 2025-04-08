export function authCheck() {
  return getAccessToken() ? true : false;
}

export function getParams(route) {
  var params = route.path.substring(1).split('/');
  return params[params.length - 1];
}

export function getFirstError(error) {
  if (error.response && error.response.data) {
    let values = [];
    if (error.response.data.error) {
      values = error.response.data.error;
    } else {
      values = error.response.data;
    }

    for (var i = 0; i < 5; i++) {
      if (typeof values === 'object') {
        values = Object.values(values)[0];
      }
    }

    return values ? values : `${error.message ? error.message : 'Something went wrong!'}`;
  }
  return error.message;
}

export function getServerErrors(error) {
  if (error.response && error.response) {
    var msg = error.response.data;
    return msg ?? 'Network Error';
  }
  return 'Something went wrong!';
}

export function setRefreshToken(value) {
  const now = new Date();
  const ttl = Number(import.meta.env.VITE_REFRESH_TOKEN_EXPIRE_IN || 168) * 3600000;
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  }
  localStorage.setItem('refresh_token', JSON.stringify(item));
}

export function setAccessToken(value) {
  const now = new Date();
  const ttl = Number(import.meta.env.VITE_ACCESS_TOKEN_EXPIRE_IN || 72) * 600000;
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  }
  localStorage.setItem('access_token', JSON.stringify(item));
}

export function getRefreshToken() {
  const itemStr = localStorage.getItem('refresh_token');
  if (!itemStr) {
    return null
  }

  const item = JSON.parse(itemStr)
  const now = new Date()
  if (now.getTime() > item.expiry) {
    localStorage.removeItem('refresh_token')
    return null
  }
  return item.value
}

export function getAccessToken() {
  const itemStr = localStorage.getItem('access_token');
  if (!itemStr) {
    return null
  }

  const item = JSON.parse(itemStr)
  const now = new Date();
  if (now.getTime() > item.expiry) {
    localStorage.removeItem('access_token')
    return null
  }

  return item.value
}

export const setCurrentUser = (name) => {
  return localStorage.setItem('currentUser', JSON.stringify(name));
}

export const getCurrentUser = () => {
  return localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;
}

export const isTscUser = () => {
  let user = getCurrentUser();

  if (user) {
    return user.role_type === 'tsc';
  }
  return false;
}

export const setComapanyLogo = (green = '', blue = '', dark = '') => {
  return localStorage.setItem('logo', JSON.stringify({ green: green, blue: blue, dark: dark }));
}

export const getComapanyLogo = () => {
  let logos = localStorage.getItem('logo') ? JSON.parse(localStorage.getItem('logo')) : {};
  if (!logos.green) {
    logos.green = '/logo/wlx-logo-green.png';
  }

  if (!logos.blue) {
    logos.blue = '/logo/wlx-logo-blue.png';
  }

  if (!logos.dark) {
    logos.dark = '/logo/wlx-logo-dark.png';
  }
  return logos;
}

export const authHeader = () => {
  let token = getAccessToken();
  if (!token) {
    return 0;
  }
  return { headers: { 'Authorization': `Bearer ${token}` } };
}

export const isPlanActive = () => {
  let status = localStorage.getItem('plan_active') ?? 0;
  return Number(status) ? true : false;
}

export const rememberMe = () => {
  return localStorage.getItem('remember');
}

export const setRememberMe = (data) => {
  return localStorage.setItem('remember', JSON.stringify(data));
}

export const getSearchParams = (name) => {
  var q = window.location.search.substring(1);
  if (q) {
    let p = q.split(`${name}=`);
    return p.length > 1 ? p[1].split("&")[0] : false;
  }
  return false;
}

export const getNumber = (_str) => {
  var arr = String(_str).split("");
  var out = new Array();
  for (var cnt = 0; cnt < arr.length; cnt++) {
    if (isNaN(arr[cnt]) == false || arr[cnt] == ".") {
      out.push(arr[cnt]);
    }
  }
  return Number(out.join(""));
}

export const mapClientList = (array = []) => {
  return array.map(item => {
    var client = item.client;
    client.scenarios = item.scenarios;
    client.reports = item.reports ? item.reports.reports_data : [];
    let report = item.scenarios.length
      ? item.scenarios.map(s => {
        let scenario_name = s.scenario_details.name;
        let scenario_id = s.scenario_details.id;
        s.reports.reports_data;
        if (s.reports.reports_data.length) {
          s.reports.reports_data = s.reports.reports_data.map(r => {
            r.scenario_name = scenario_name;
            r.scenario_id = scenario_id;
            return r;
          });
        }
        return s.reports.reports_data;
      }) || []
      : [];
    report = report.filter(r => r.length)[0] || [];
    report = client.scenarios.filter(i => i.reports.reports_data.length);
    let all_reports = [];
    report.forEach(e => {
      all_reports = [...all_reports, ...e.reports.reports_data];
    });

    client.reports = all_reports;
    return client;
  });
}

export const mapHistoricalClientList = (array = []) => {
  return array.map(item => {
    var client = item.client;
    client.simulations = item.simulations;
    client.reports = item.reports ? item.reports.reports_data : [];
    let report = item.simulations.length
      ? item.simulations.map(s => {
        let simulation_name = s.simulation_details.name;
        let simulation_id = s.simulation_details.id;
        s.reports.reports_data;
        if (s.reports.reports_data.length) {
          s.reports.reports_data = s.reports.reports_data.map(r => {
            r.simulation_name = simulation_name;
            r.simulation_id = simulation_id;
            return r;
          });
        }
        return s.reports.reports_data;
      }) || []
      : [];
    report = report.filter(r => r.length)[0] || [];
    report = client.simulations.filter(i => i.reports.reports_data.length);
    let all_reports = [];
    report.forEach(e => {
      all_reports = [...all_reports, ...e.reports.reports_data];
    });

    client.reports = all_reports;
    return client;
  });
}

export const setCurrentSimulation = (obj) => {
  return localStorage.setItem('currentSimulation', JSON.stringify(obj));
}

export const getCurrentSimulation = () => {
  return JSON.parse(localStorage.getItem('currentSimulation'));
}

export const setSimulationStep1 = (obj) => {
  return localStorage.setItem('simulationStep1', JSON.stringify(obj));
}

export const getSimulationStep1 = () => {
  return JSON.parse(localStorage.getItem('simulationStep1'));
}

export const setSimulationStep2 = (obj) => {
  return localStorage.setItem('simulationStep2', JSON.stringify(obj));
}

export const getSimulationStep2 = () => {
  return JSON.parse(localStorage.getItem('simulationStep2'));
}

export const setSimulationStep3 = (obj) => {
  return localStorage.setItem('simulationStep3', JSON.stringify(obj));
}

export const getSimulationStep3 = () => {
  return JSON.parse(localStorage.getItem('simulationStep3'));
}

export const setCurrentScenario = (obj) => {
  return localStorage.setItem('currentScenario', JSON.stringify(obj));
}

export const getCurrentScenario = (obj) => {
  return JSON.parse(localStorage.getItem('currentScenario'));
}

export const setScenarioStep1 = (obj) => {
  return localStorage.setItem('scenarioStep1', JSON.stringify(obj));
}

export const getScenarioStep1 = () => {
  return JSON.parse(localStorage.getItem('scenarioStep1'));
}

export const setScenarioStep2 = (obj) => {
  return localStorage.setItem('scenarioStep2', JSON.stringify(obj));
}

export const getScenarioStep2 = () => {
  return JSON.parse(localStorage.getItem('scenarioStep2'));
}

export const setScenarioStep3 = (obj) => {
  return localStorage.setItem('scenarioStep3', JSON.stringify(obj));
}

export const getScenarioStep3 = () => {
  return JSON.parse(localStorage.getItem('scenarioStep3'));
}

export const setScenarioStep4 = (obj) => {
  return localStorage.setItem('scenarioStep4', JSON.stringify(obj));
}

export const getScenarioStep4 = () => {
  return JSON.parse(localStorage.getItem('scenarioStep4'));
}

export const clearScenarioCacheData = () => {
  localStorage.setItem('currentScenario', null);
  localStorage.setItem('scenarioStep1', null);
  localStorage.setItem('scenarioStep2', null);
  localStorage.setItem('scenarioStep3', null);
  localStorage.setItem('scenarioStep4', null);
}

export const clearSimulationCacheData = () => {
  localStorage.setItem('currentSimulation', null);
  localStorage.setItem('simulationStep1', null);
  localStorage.setItem('simulationStep2', null);
  localStorage.setItem('simulationStep3', null);
}

export const getIncomeRiderYearLabels = (distribution1 = [], distribution2 = [], distribution3 = []) => {
  if (!distribution1.length) {
    return [];
  }

  let maxYear = distribution1.length;
  let minYear = 1;
  let yearsLabel = [];
  let nonZeroFirstIndex = [];

  for (let i = 0; i < maxYear; i++) {
    if (distribution1[i] && !nonZeroFirstIndex.length) {
      nonZeroFirstIndex.push(i + 1);
    }

    if (distribution2[i] && nonZeroFirstIndex.length < 2) {
      nonZeroFirstIndex.push(i + 1);
    }

    if (distribution3[i] && nonZeroFirstIndex.length < 3) {
      nonZeroFirstIndex.push(i + 1);
    }
  }
  minYear = Math.min(...nonZeroFirstIndex) || 0;

  for (let index = minYear; index <= maxYear; index++) {
    yearsLabel.push(index);
  }

  return yearsLabel;
}

export const getBaseUrl = () => import.meta.env.VITE_API_BASE_URL;
