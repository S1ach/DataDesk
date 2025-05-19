Ext.define('DataDesk.view.login.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',
    layout: 'center',


    items: [{
        title: 'Авторизация',
        bodyPadding: 20,
        xtype: 'form',
        width: 400,
        style: {
            boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)'
        },
        items: [
            {
                xtype: 'textfield',
                fieldLabel: 'Логин',
                name: 'username',
                emptyText: 'Введите логин',
                allowBlank: false,
                bind: '{username}',
                listeners: {
                    specialkey: 'onSpecialKey'
                }
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Пароль',
                name: 'password',
                inputType: 'password',
                emptyText: 'Введите пароль',
                allowBlank: false,
                bind: '{password}',
                listeners: {
                    specialkey: 'onSpecialKey'
                }
            }

        ],

        buttons: [
            {
                text: 'Войти',
                formBind: true,
                handler: 'onLoginClick'
            }
        ]
    }],



    requires: [
        'DataDesk.view.login.LoginController',
        'DataDesk.view.login.LoginModel'
    ],

    controller: 'login',
    viewModel: {
        type: 'login'
    }
});

