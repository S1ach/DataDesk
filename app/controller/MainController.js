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
    },


    saveClick: function(btn) {
        var win = btn.up('window');
        var priceField = win.down('#priceField');
        var countField = win.down('#countField');
        var record = win.record;

        var updatedData = {
            price: priceField.getValue(),
            count: countField.getValue()
        };
        record.set(updatedData);

        win.close();

        Ext.Msg.alert('Успех', 'Данные сохранены локально');
    }


});
