export function authCheck() {
  return getAccessToken() ? true : false;
}

export function getParams(route) {
  var params = route.path.substring(1).split('/');
  return params[params.length - 1];
}

export function getFirstError(error) {
  if (error.response && error.response.data) {
    let data = error.response.data;
    
    // Handle JWT authentication errors specifically
    if (data.detail && typeof data.detail === 'string') {
      // Handle common JWT errors
      if (data.detail.includes('Given token not valid')) {
        return 'Your session has expired. Please log in again.';
      }
      if (data.detail.includes('token') && data.detail.includes('expired')) {
        return 'Your session has expired. Please log in again.';
      }
      return data.detail;
    }
    
    // Handle other error formats
    let values = data.error || data;
    
    // Drill down through nested objects, but preserve strings
    for (var i = 0; i < 5; i++) {
      if (typeof values === 'object' && !Array.isArray(values)) {
        let objectValues = Object.values(values);
        if (objectValues.length > 0) {
          values = objectValues[0];
        } else {
          break;
        }
      } else if (Array.isArray(values) && values.length > 0) {
        values = values[0];
      } else {
        break;
      }
    }

    return values && values.toString ? values.toString() : `${error.message ? error.message : 'Something went wrong!'}`;
  }
  return error.message || 'Something went wrong!';
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
  const ttl = Number(getRuntimeEnv('VITE_REFRESH_TOKEN_EXPIRE_IN', '168')) * 3600000;
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  }
  localStorage.setItem('refresh_token', JSON.stringify(item));
}

export function setAccessToken(value, rememberMe = false) {
  const now = new Date();
  // If remember me is checked, extend token to 7 days, otherwise 12 hours
  const baseTtl = Number(getRuntimeEnv('VITE_ACCESS_TOKEN_EXPIRE_IN', '72')) * 600000; // 12 hours
  const extendedTtl = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
  const ttl = rememberMe ? extendedTtl : baseTtl;
  
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
    rememberMe: rememberMe
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

// export function getAccessToken() {
//   const itemStr = localStorage.getItem('access_token');
//   if (!itemStr) {
//     return null
//   }

//   const item = JSON.parse(itemStr)
//   const now = new Date();
//   if (now.getTime() > item.expiry) {
//     localStorage.removeItem('access_token')
//     return null
//   }

//   return item.value
// }

export function getAccessToken() {
  // Check sessionStorage first (for admin-generated sessions)
  if (sessionStorage.getItem("login_from_admin") === "1") {
    const sessionRaw = sessionStorage.getItem("access_token");
    if (sessionRaw) {
      try {
        const sessionParsed = JSON.parse(sessionRaw);
        if (sessionParsed && sessionParsed.expiry) {
          const now = new Date().getTime();
          if (now > sessionParsed.expiry) {
            sessionStorage.removeItem("access_token");
            sessionStorage.removeItem("login_from_admin");
            return null;
          }
        }
        return sessionParsed && sessionParsed.value ? sessionParsed.value : null;
      } catch (e) {
        sessionStorage.removeItem("access_token");
        return null;
      }
    }
  }

  // Fallback to localStorage for normal sessions
  const raw = localStorage.getItem("access_token");
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw);
    
    // Check if token has expiry and is expired
    if (parsed && parsed.expiry) {
      const now = new Date().getTime();
      if (now > parsed.expiry) {
        // Token expired, clean up
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        return null;
      }
    }
    
    return parsed && parsed.value ? parsed.value : null;
  } catch (e) {
    // If parsing fails, remove the corrupted token
    localStorage.removeItem("access_token");
    return null;
  }
}

export const setCurrentUser = (name) => {
  return localStorage.setItem('currentUser', JSON.stringify(name));
}

export const getCurrentUser = () => {
  // Check sessionStorage first (for admin-generated sessions)
  if (sessionStorage.getItem("login_from_admin") === "1") {
    const sessionUser = sessionStorage.getItem('currentUser');
    if (sessionUser) {
      return JSON.parse(sessionUser);
    }
  }
  
  // Fallback to localStorage for normal sessions
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

export const isAdminUser = () => {
  const user = getCurrentUser();
  if (!user) return false;
  
  try {
    // User data is already an object from getCurrentUser
    return user.is_staff === true || user.is_superuser === true || user.role_type === 'admin';
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
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

// Runtime environment variable helper - falls back to import.meta.env for local development
export const getRuntimeEnv = (key, fallback = '') => {
  const placeholder = `__${key}__`;
  return placeholder === `__${key}__` ? (import.meta.env[key] || fallback) : placeholder;
};

export const getBaseUrl = () => import.meta.env.VITE_API_BASE_URL || '/api';

export const restoreAdminSession = () => {
  const adminBackup = localStorage.getItem('admin_session_backup');
  if (adminBackup) {
    try {
      const backup = JSON.parse(adminBackup);
      
      // Restore admin tokens
      if (backup.access_token) {
        localStorage.setItem('access_token', backup.access_token);
      }
      if (backup.refresh_token) {
        localStorage.setItem('refresh_token', backup.refresh_token);
      }
      if (backup.currentUser) {
        localStorage.setItem('currentUser', backup.currentUser);
      }
      
      // Clean up backup
      localStorage.removeItem('admin_session_backup');
      localStorage.removeItem('login_from_admin');
      
      return true;
    } catch (e) {
      console.error('Failed to restore admin session:', e);
      localStorage.removeItem('admin_session_backup');
      return false;
    }
  }
  return false;
};

export const hasAdminSessionBackup = () => {
  return localStorage.getItem('admin_session_backup') !== null;
};

// Admin-specific token management (separate from user tokens)
export const setAdminTokens = (accessToken, refreshToken = null, user = null) => {
  const now = new Date();
  const ttl = 12 * 60 * 60 * 1000; // 12 hours
  
  const accessData = {
    value: accessToken,
    expiry: now.getTime() + ttl,
    isAdmin: true
  };
  localStorage.setItem('admin_access_token', JSON.stringify(accessData));
  
  if (refreshToken) {
    const refreshTtl = 7 * 24 * 60 * 60 * 1000; // 7 days
    const refreshData = {
      value: refreshToken,
      expiry: now.getTime() + refreshTtl,
      isAdmin: true
    };
    localStorage.setItem('admin_refresh_token', JSON.stringify(refreshData));
  }
  
  if (user) {
    localStorage.setItem('admin_user', JSON.stringify(user));
  }
};

export const getAdminAccessToken = () => {
  const itemStr = localStorage.getItem('admin_access_token');
  if (!itemStr) return null;
  
  try {
    const item = JSON.parse(itemStr);
    const now = new Date().getTime();
    
    if (now > item.expiry) {
      localStorage.removeItem('admin_access_token');
      return null;
    }
    
    return item.value;
  } catch (e) {
    localStorage.removeItem('admin_access_token');
    return null;
  }
};

export const getAdminUser = () => {
  const userStr = localStorage.getItem('admin_user');
  return userStr ? JSON.parse(userStr) : null;
};

export const adminAuthHeader = () => {
  const token = getAdminAccessToken();
  if (!token) return {};
  return { headers: { 'Authorization': `Bearer ${token}` } };
};

export const clearAdminTokens = () => {
  localStorage.removeItem('admin_access_token');
  localStorage.removeItem('admin_refresh_token');
  localStorage.removeItem('admin_user');
};

export const hasAdminSession = () => {
  return getAdminAccessToken() !== null && getAdminUser() !== null;
};

export const restoreAdminSessionFromBackup = () => {
  const adminToken = getAdminAccessToken();
  const adminUser = getAdminUser();
  
  if (adminToken && adminUser) {
    // Restore admin as current user
    setAccessToken(adminToken);
    setCurrentUser(adminUser);
    
    // Clear the backup to avoid confusion
    clearAdminTokens();
    localStorage.removeItem('login_from_admin');
    
    return true;
  }
  return false;
};
