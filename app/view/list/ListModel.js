Ext.define('DataDesk.view.list.ListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.list',

    stores: {
        products: {
            type: 'products',
            autoLoad: true,
            pageSize: 5
        }
    },

    data: {
    }
});