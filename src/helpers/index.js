import { authCheck } from "../services/helper";

const myPlugin = {
    install(app) {
        app.config.globalProperties.$numFormat = (key) => {
            return Number(key).toLocaleString();
        },
        app.config.globalProperties.$numFormatWithDollar = (key) => {
            return key ? '$' + Number(key).toLocaleString() : '-';
        },
        app.config.globalProperties.$appTheme = () => {
            return localStorage.getItem("mode") || 'light-green';
        },
        app.config.globalProperties.$authCheck = () => {
            return authCheck();
        },
        app.config.globalProperties.$currentUser = () => {
            return localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : false;
        },
        app.config.globalProperties.$sortName = (string) => {
            var name = '';
            if (string) {
                var arr = string.trim().split(' ');
                arr.forEach(element => {
                    if (element) {
                        name += element.split('')[0];
                    }
                });
            }
            return name.toUpperCase();
        },
        app.config.globalProperties.$getPlanName = (key) => {
            let plans = { '1':'Free Trial', '2':'Monthly Plan', '3':'Yearly Plan'};
            return plans[key] ?? plans['1'];
        }       
    }
}

export default myPlugin;
