/**
 * Created by sarp2 on 16.05.2025.
 */
Ext.define('DataDesk.view.list.ListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.list',

    stores: {
        products: {
            type: 'products',
            autoLoad: true,
            pageSize: 5
        }
        /*
        A declaration of Ext.data.Store configurations that are first processed as binds to produce an effective
        store configuration. For example:

        users: {
            model: 'List',
            autoLoad: true
        }
        */
    },

    data: {
        /* This object holds the arbitrary data that populates the ViewModel and is then available for binding. */
    }
});