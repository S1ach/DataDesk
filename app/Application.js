/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('DataDesk.Application', {
    extend: 'Ext.app.Application',
    
    name: 'DataDesk',

    stores: [
        // TODO: add global / shared stores here
    ],

    // Проверка дял авторизации
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
