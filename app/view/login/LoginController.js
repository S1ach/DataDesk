/**
 * Created by sarp2 on 15.05.2025.
 */
Ext.define('DataDesk.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',



    /**
     * Called when the view is created
     */
    onLoginClick: function() {
        const view = this.getView();
        const vm = this.getViewModel();
        const username = vm.get('username');
        const password = vm.get('password');

        if (username === 'admin' && password === 'padmin') {
            localStorage.setItem('isLoggedIn', 'true');
            Ext.app.Application.instance.setMainView('DataDesk.view.main.Main');
        } else {
            Ext.Msg.alert('Ошибка', 'Неверный логин или пароль');
        }
    },

    onSpecialKey: function(field, e) {
        if (e.getKey() === e.ENTER) {
            const form = field.up('form');
            if (form.isValid()) {
                this.onLoginClick();
            }
        }
    }


});