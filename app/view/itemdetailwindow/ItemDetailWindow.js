Ext.define('DataDesk.view.itemdetailwindow.ItemDetailWindow', {
    extend: 'Ext.Container',

    requires: [
        'DataDesk.view.itemdetailwindow.ItemDetailWindowModel',
		'DataDesk.view.itemdetailwindow.ItemDetailWindowController'
    ],


    viewModel: {
        type: 'itemdetailwindow'
    },

    controller: 'itemdetailwindow',

    items: [
    ]
});