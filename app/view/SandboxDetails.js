/*
 * File: app/view/SandboxDetails.js
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

Ext.define('Google.view.SandboxDetails', {
    extend: 'Ext.Panel',
    alias: 'widget.SandboxDetails',

    config: {
        padding: 20,
        tpl: [
            '<div class="blue-text">{title}</div>',
            '<small>{info}</small>'
        ],
        listeners: [
            {
                fn: 'onPanelInitialize',
                event: 'initialize'
            },
            {
                fn: 'onSandboxWebButtonTap',
                event: 'tap',
                delegate: '#SandboxWebButton'
            }
        ],
        items: [
            {
                xtype: 'button',
                bottom: '70%',
                id: 'SandboxWebButton',
                itemId: 'SandboxWebButton',
                margin: '0 0 0 20',
                ui: 'confirm',
                iconAlign: 'bottom',
                text: 'Website'
            }
        ]
    },

    onPanelInitialize: function(component, options) {
        var record = this.getData();


        //Ext.getCmp('SandboxWebButton').setText(record.website);
    },

    onSandboxWebButtonTap: function(button, e, options) {
        Ext.Msg.alert("WIP", "External Links function hasn't yet been implemented.");
    }

});