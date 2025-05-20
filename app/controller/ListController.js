Ext.define('DataDesk.controller.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.list',

    onIDFilter: function(field, e) {
        if (e.getKey() === e.ENTER) {
            var value = field.getValue();
            var grid = field.up('gridpanel');
            var store = grid.getStore();

            store.removeFilter('idFilter', false);

            if (value) {
                store.addFilter({
                    id: 'idFilter',
                    property: 'ID',
                    value: value,
                    anyMatch: true,
                    caseSensitive: false
                });
            }
            store.load();
        }
    },

    onDESCFilter: function(field, e) {
        if (e.getKey() === e.ENTER) {
            var value = field.getValue();
            var grid = field.up('gridpanel');
            var store = grid.getStore();

            store.removeFilter('descFilter', false);

            if (value) {
                store.addFilter({
                    id: 'descFilter',
                    property: 'desc',
                    value: value,
                    anyMatch: true,
                    caseSensitive: false
                });
            }
            store.load();
        }
    },





    onItemSelected: function (_, record) {
        Ext.create('Ext.window.Window', {
            title: record.get('name'),
            modal: true,
            width: 400,
            height: 300,
            layout: 'form',
            bodyPadding: 10,
            record: record,
            defaults: {
                anchor: '100%',
                labelWidth: 80
            },
            items: [{
                xtype: 'displayfield',
                fieldLabel: 'ID',
                value: record.get('ID')
            },
                {
                    xtype: 'displayfield',
                    fieldLabel: 'Наименование',
                    value: record.get('name')
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Цена:',
                    value: record.get('price'),
                    itemId: 'priceField',
                    minValue: 0,
                    allowDecimals: true,
                    decimalPrecision: 2,
                    allowNegative: false
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Кол-во:',
                    value: record.get('count'),
                    itemId: 'countField',
                    minValue: 0,
                    allowDecimals: false,
                    allowNegative: false
                }

            ],
            buttons: [
                {
                    text: 'Сохранить',
                    formBind: true,
                    handler: 'saveClick'
                }]
        }).show();
    }

});