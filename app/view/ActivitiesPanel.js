/*
 * File: app/view/ActivitiesPanel.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Google.view.ActivitiesPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.ActivitiesPanel',

    config: {
        ui: 'light',
        items: [
            {
                xtype: 'list',
                title: 'Day',
                itemId: 'mylist9',
                itemTpl: [
                    '<div class="act-padding">',
                    '    <small>{from} - {until}</small>',
                    '    <div class="blue-text-norm">{title}</div>',
                    '    <small>{location}</small>',
                    '    ',
                    '',
                    '</div>'
                ],
                store: 'ActivitiesStore'
            },
            {
                xtype: 'list',
                title: 'Night',
                itemId: 'mylist10',
                itemTpl: [
                    '<div class="act-padding">',
                    '    <small>{from} - {until}</small>',
                    '    <div class="blue-text-norm">{title}</div>',
                    '    <small>{location}</small>',
                    '    ',
                    '',
                    '</div>'
                ],
                store: 'ActivitiesStore'
            }
        ],
        listeners: [
            {
                fn: 'onMylist9Show',
                event: 'show',
                delegate: '#mylist9'
            },
            {
                fn: 'onMylist9ItemTap',
                event: 'itemtap',
                delegate: '#mylist9'
            },
            {
                fn: 'onMylist10Show',
                event: 'show',
                delegate: '#mylist10'
            },
            {
                fn: 'onMylist10ItemTap',
                event: 'itemtap',
                delegate: '#mylist10'
            }
        ]
    },

    onMylist9Show: function(component, options) {
        // Load in the stores


        Ext.getStore('ActivitiesStore').getProxy().setExtraParams({
            'section':'1',
            'activities': true,
            'event' : '1'
        });


        //Load the Speakers Store in
        Ext.getStore('ActivitiesStore').load();
    },

    onMylist9ItemTap: function(dataview, index, target, record, e, options) {
        this.up('NavView').push({
            xtype: 'ActivityPanel',
            data: record.data,
            title: 'Details'
        });
    },

    onMylist10Show: function(component, options) {
        // Load in the stores


        Ext.getStore('ActivitiesStore').getProxy().setExtraParams({
            'section':'2',
            'activities': true,
            'event' : '1'
        });


        //Load the Speakers Store in
        Ext.getStore('ActivitiesStore').load();
    },

    onMylist10ItemTap: function(dataview, index, target, record, e, options) {
        this.up('NavView').push({
            xtype: 'ActivityPanel',
            data: record.data,
            title: 'Details'
        });
    }

});