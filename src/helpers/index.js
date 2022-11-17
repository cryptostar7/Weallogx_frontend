const myPlugin = {
    install(app) {
        app.config.globalProperties.$numFormat = (key) => {
            return Number(key).toLocaleString();
        },
        app.config.globalProperties.$numFormatWithDollar = (key) => {
            return key ? '$'+Number(key).toLocaleString() : '-';
        },
        app.config.globalProperties.$appTheme = () => {
            return localStorage.getItem("mode") || 'light-green';
        }
    }
}

export default myPlugin;
