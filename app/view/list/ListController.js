/**
 * Created by sarp2 on 16.05.2025.
 */
Ext.define('DataDesk.view.list.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.list',

    /**
     * Called when the view is created
     */
    onIDFilterChange: function(field, value) {
        
    },



    onItemSelected: function (_, record) {
        Ext.create('Ext.window.Window', {
            title: record.get('name'),
            modal: true,
            width: 400,
            height: 350,
            layout: 'form',
            bodyPadding: 10,
            defaults: {
                anchor: '100%',
                labelWidth: 80
            },
            items: [{
                xtype: 'displayfield',
                fieldLabel: 'ID',
                value: record.get('ID'),
            },
            {
                xtype: 'displayfield',
                fieldLabel: 'Наименование',
                value: record.get('name'),
            },
            {
                xtype: 'numberfield',
                fieldLabel: 'Цена:',
                value: record.get('price'),
                itemId: 'priceField',
                minValue: 0,
                allowDecimals: false
            },
            {
                xtype: 'numberfield',
                fieldLabel: 'Кол-во:',
                value: record.get('count'),
                itemId: 'countField',
                minValue: 0,
                allowDecimals: false
            },

            ],
            buttons: [
            {
                text: 'Сохранить',
                formBind: true,
                handler: 'SaveClick'
            },]
        }).show();
    },
});