/*
 * File: app/view/MessagePanel.js
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

Ext.define('Google.view.MessagePanel', {
    extend: 'Ext.Panel',
    alias: 'widget.MessagePanel',

    requires: [
        'Ext.dataview.List'
    ],

    config: {
        items: [
            {
                xtype: 'list',
                height: '100%',
                itemId: 'mylist5',
                layout: {
                    type: 'fit'
                },
                scrollable: 'vertical',
                itemTpl: [
                    '<div style="height:50px;">',
                    '    <div style="float:left; width:90%; ">',
                    '    {username}<br />',
                    '        <small>{date:date("d-m-Y")}</small>',
                    '    </div>',
                    '    <div class="receipt" style="float:right; width:10%; vertical-align:50px;">!</div>',
                    '</div>'
                ],
                store: 'MessageStore'
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                style: 'background-color:#000;',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'mybutton13',
                        iconAlign: 'center',
                        iconCls: 'refresh',
                        iconMask: true,
                        text: ''
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onMylist5ItemTap',
                event: 'itemtap',
                delegate: '#mylist5'
            },
            {
                fn: 'onMybutton13Tap',
                event: 'tap',
                delegate: '#mybutton13'
            },
            {
                fn: 'onTabpanelInitialize',
                event: 'initialize'
            },
            {
                fn: 'onTabpanelShow',
                event: 'show'
            }
        ]
    },

    onMylist5ItemTap: function(dataview, index, target, record, e, options) {

        var store = Ext.getStore('CurrentUser');


        var rec = store.findRecord('id', '1');
        var user_id = rec.get('user_id'); // get the allowMessages toggle value

        this.up('NavView').push({
            xtype: 'readMessage',
            data: record.data,
            myUser: user_id,
            c_id: record.data.c_id,
            title: record.data.username
        });
    },

    onMybutton13Tap: function(button, e, options) {
        Ext.getStore('MessageStore').load();

        //this.getStore('SpeakerProfilesSearch').getProxy().setExtraParam('agendaspeaker', '1,2');

        console.log("Inbox Refreshed.");
    },

    onTabpanelInitialize: function(component, options) {
        var store = Ext.getStore('CurrentUser');

        store.load();
        var rec = store.findRecord('id', '1');
        user_id = rec.get('user_id'); // get the allowMessages toggle value




        Ext.getStore('MessageStore').getProxy().setExtraParams({
            'key':'123',
            'section':'inbox',
            'u_id':user_id
        });

        Ext.getStore('MessageStore').load();

        //this.getStore('SpeakerProfilesSearch').getProxy().setExtraParam('agendaspeaker', '1,2');

        console.log("Inbox Loaded.");
    },

    onTabpanelShow: function(component, options) {
        //Ext.ComponentQuery.query('NavView')[0].getNavigationBar().add({xtype:'button',align:'right', iconCls: 'compose', iconMask: true, name: 'composeButton', id: 'composeButton', itemId: 'composeButton', ui: 'confirm', autoDestroy: false});



    }

});