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
            app.config.globalProperties.$sortName = (string) => {
                var name = '';
                if (string) {
                    var arr = string.trim().split(' ');
                    arr.forEach(element => {
                        if(element){
                            name += element.split('')[0];
                        }
                    });
                }
                return name.toUpperCase();
            }
    }
}

export default myPlugin;
