/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DataDesk.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',


    // onLogoutClick: function() {
    //     Ext.create('Ext.window.Window', {
    //         title: 'Выход',
    //         closable: false,
    //         modal: true,
    //         items: [{
    //             xtype: 'label',
    //             text: 'Вы точно хотите выйти?'
    //         }],
    //         buttons: [{
    //             text: 'Да',
    //             handler: this.onConfirmLogout,
    //         }, {
    //             text: 'Нет',
    //             handler: function() {
    //                 this.up('window').close();
    //             }
    //         }]
    //     }).show();
    // },

    onLogoutClick: function() {

        Ext.Msg.confirm('Выход', 'Вы точно хотите выйти', this.onConfirmLogout, this);
    },

    onConfirmLogout: function(btn) {
        if (btn === 'yes') {
            localStorage.removeItem('isLoggedIn');
            let mainView = Ext.ComponentQuery.query('app-main')[0];
            if (mainView) {
                mainView.destroy();
            }
            Ext.app.Application.instance.setMainView('DataDesk.view.login.Login');
        }
    }

});
