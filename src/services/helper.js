export function authCheck(param) {
    return param;
}

export function getParams(route) {
    var params = route.path.substring(1).split('/');
    return params[params.length - 1];
}

export function getFirstError(error){
    if(error.response && error.response.data){
      var msg = Object.values(error.response.data)[0];
      if(typeof msg === 'object'){
        console.log(msg[0]);
        msg = msg[0];
      }
      return msg ?? 'Network Error';
    }
    return 'Network Error';
}
  
export function getServerErrors(error){
    if(error.response && error.response){
      var msg = error.response.data;
      return msg ?? 'Network Error';
    }
    return 'Network Error';
}
  