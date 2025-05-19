Ext.application({
    name: 'DataDesk',

    extend: 'DataDesk.Application',

    requires: [
        'DataDesk.view.main.Main',
        'DataDesk.view.login.Login'
    ],

    mainView: 'DataDesk.view.login.Login'
});

