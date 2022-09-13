export function authCheck(param) {
    return param;
}

export function getParams(route) {
    var params = route.path.substring(1).split('/');
    return params[params.length - 1];
}

