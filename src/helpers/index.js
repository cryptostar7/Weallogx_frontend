import { authCheck, isTscUser } from "../services/helper";
import moment from "moment/moment";
const myPlugin = {
    install(app) {
        app.config.globalProperties.$numFormat = (key) => {
            return Number(Number(key).toFixed(2)).toLocaleString('en-US');
        },
        app.config.globalProperties.$numFormatNoDecimal = (key) => {
            return Number(Number(key).toFixed(0)).toLocaleString('en-US');
        },
        app.config.globalProperties.$numFormatWithDollar = (key) => {
            key = Number(key || 0);
            if (!key) {
                return '';
            }
            key = key.toFixed(0);
            return key ? `${key.toString().includes('-') ? '- $' : '$'}${Number(key.toString().replace('-', '')).toLocaleString('en-US')}` : '-';
        },
        app.config.globalProperties.$dateFormat = (date) => {
            let temp = new Date(date);
            let day = temp.getDate().toString().slice(-2);
            let month = Number(temp.getMonth() + 1).toString().slice(-2);
            let year = temp.getFullYear().toString().slice(-2);
            return `${month.length < 2 ? '0' + month : month}/${day.length < 2 ? '0' + day : day}/${year}`;
        },
        app.config.globalProperties.$customDateFormat = (date, dateFormat) => {
            return moment(date).format(dateFormat);
        },
        app.config.globalProperties.$appTheme = () => {
            return localStorage.getItem("mode") || 'light-green';
        },
        app.config.globalProperties.$authCheck = () => {
            return authCheck();
        },
        app.config.globalProperties.$isTscUser = () => {
            return isTscUser();
        },
        app.config.globalProperties.$currentUser = () => {
            return localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : false;
        },
        app.config.globalProperties.$sortName = (first = '', last = '', middle = '') => {
            let str = last.substring(0, 1).toUpperCase() + last.substring(1, 2).toLowerCase();
            return str;
        },
        app.config.globalProperties.$getPlanName = (key) => {
            let plans = { '1': 'Free Trial', '2': 'Monthly Plan', '3': 'Yearly Plan' };
            return plans[key] ?? plans['1'];
        },
        app.config.globalProperties.$getTemplateId = (template_name = "", list = []) => {
            if (template_name) {
                let item = list.filter(item => {
                    return item.template_name.toLowerCase() === template_name.toLowerCase().trim();
                });
                return item[0] ? item[0].id : false;
            }
            return false;
        },
        app.config.globalProperties.$roundFigureNum = (value) => {
            let a = value.toString();
            let b = "1".padEnd(a.length - 1, "0"); // return minimum round figure number like if value is 99999 the result will be 10000. 
            return Math.ceil(Number(value) / b) * b;
        },
        app.config.globalProperties.$average = (list) => {
            list = list.filter(i => i >= 1);
            return list.reduce((prev, curr) => prev + curr) / list.length;
        },
        app.config.globalProperties.$clientName = (first, last, middle = '') => {
            return `${last || ''}, ${first || ''} ${middle || ''}`;
        }
    }
}

export default myPlugin;
