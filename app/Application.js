Ext.define('DataDesk.Application', {
    extend: 'Ext.app.Application',
    
    name: 'DataDesk',

    launch: function () {
        if (localStorage.getItem('isLoggedIn') === 'true') {
            this.setMainView('DataDesk.view.main.Main');
        } else {
            this.setMainView('DataDesk.view.login.Login');
        }
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
