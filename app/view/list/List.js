Ext.define('DataDesk.view.list.List', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainlist',


    requires: [
        'DataDesk.store.Products'
    ],

    title: 'Список товаров',

    layout: 'fit',

    viewModel: {
        type: 'list'
    },

    controller: 'list',


    items: [{
        xtype: 'grid',
        bind: {
            store: '{products}'
        },

        listeners: {
            select: 'onItemSelected',
            afterrender: function(grid) {
                grid.getStore().loadPage(1);
            }
        },

        bbar: {
            xtype: 'pagingtoolbar',
            displayInfo: true,
            displayMsg: 'Показано {0} - {1} из {2}',
            emptyMsg: 'Нет данных для отображения',
            bind: {
                store: '{products}'
            }
        },


        tbar: [{
            xtype: 'container',
            items: [{
                xtype: 'textfield',
                fieldLabel: 'ID:',
                emptyText: 'Введите ID',
                itemId: 'IDFilterField',
                enableKeyEvents: true,
                listeners: {
                    specialkey: 'onIDFilter'
                }
            },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Описание:',
                    emptyText: 'Введите фильтр',
                    itemId: 'DESCFilterField',
                    enableKeyEvents: true,
                    listeners: {
                        specialkey: 'onDESCFilter'
                    }
                }]
        }],

        columns: [
            { text: 'ID',  dataIndex: 'ID' },
            { text: 'Имя', dataIndex: 'name', flex: 1 },
            { text: 'Описание', dataIndex: 'desc', flex: 1 },
            { text: 'Цена', dataIndex: 'price', flex: 1 },
            { text: 'Кол-во', dataIndex: 'count', flex: 1, renderer: function (value, metaData) {
                    if (value == 0) {
                        metaData.style = "background-color: red; font-weight: bold;";
                    }
                    return value;
                }}
        ]


    }]




});