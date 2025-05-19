Ext.define('DataDesk.controller.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',



    onLogoutClick: function() {

        Ext.Msg.confirm('Выход', 'Вы точно хотите выйти', this.onConfirmLogout, this);
    },

    onConfirmLogout: function(btn) {
        if (btn === 'yes') {
            localStorage.removeItem('isLoggedIn');
            var mainView = Ext.ComponentQuery.query('app-main')[0];
            if (mainView) {
                mainView.destroy();
            }
            Ext.app.Application.instance.setMainView('DataDesk.view.login.Login');
        }
    }

});
