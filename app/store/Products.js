Ext.define('DataDesk.store.Products', {
    extend: 'Ext.data.Store',

    alias: 'store.products',

    pageSize: 20,

    fields: [
        'ID', 'Имя', 'Описание', 'Цена', 'Кол-во'
    ],

    data: [
        { ID: 1, name: 'Товар 1', desc: 'Описание товара 1', price: 100, count: 10 },
        { ID: 2, name: 'Товар 2', desc: 'Описание товара 2', price: 200, count: 5 },
        { ID: 3, name: 'Товар 3', desc: 'Описание товара 3', price: 150, count: 8 },
        { ID: 4, name: 'Товар 4', desc: 'Описание товара 4', price: 300, count: 2 },
        { ID: 4, name: 'Товар 4', desc: 'Описание товара 4', price: 300, count: 0 },
        { ID: 4, name: 'Товар 4', desc: 'Описание товара 4', price: 300, count: 0 },
        { ID: 4, name: 'Товар 4', desc: 'Описание товара 4', price: 300, count: 2 },
    ],

    proxy: {
        type: 'memory',
        enablePaging: true,
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
