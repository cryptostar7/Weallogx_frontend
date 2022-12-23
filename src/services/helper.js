export function authCheck() {
  return getAccessToken() ? true : false;
}

export function getParams(route) {
  var params = route.path.substring(1).split('/');
  return params[params.length - 1];
}

export function getFirstError(error) {
  if (error.response && error.response.data) {
    var msg = Object.values(error.response.data)[0];
    if (typeof msg === 'object') {
      msg = msg[0];
    }
    return msg ?? 'Network Error';
  }
  return 'Something went wrong!';
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
  const ttl = Number(import.meta.env.VITE_REFRESH_TOKEN_EXPIRE_IN) * 3600000;
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  }
  localStorage.setItem('refresh_token', JSON.stringify(item));
}

export function setAccessToken(value) {
  const now = new Date();
  const ttl = Number(import.meta.env.VITE_ACCESS_TOKEN_EXPIRE_IN) * 3600000;
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

export const setCurrentUserName = (name) => {
  return localStorage.setItem('currentUserName', name);
}

export const authHeader = () => {
  let token = getAccessToken();
  if (!token) {
    return 0;
  }
  return { headers: { 'Authorization': `Bearer ${token}` } };
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
