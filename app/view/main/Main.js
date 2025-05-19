Ext.define('DataDesk.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'DataDesk.controller.MainController',
        'DataDesk.model.MainModel',
        'DataDesk.view.list.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        }
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },


    headerPosition: 'top',

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Товары',
        iconCls: 'fa-shopping-cart',
        items: [{
            xtype: 'mainlist'
        }]
    },
        {
            title: 'Выход',
            iconCls: 'fa fa-sign-out',
            listeners: {
                activate: 'onLogoutClick'
            },
            items: [{
                xtype: 'mainlist'
            }]

    }]
});
