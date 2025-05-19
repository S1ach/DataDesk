Ext.define('DataDesk.model.ListModel', {
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