/*
 * File: app/view/AttendeesPanel.js
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

Ext.define('Google.view.AttendeesPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.AttendeesPanel',

    config: {
        ui: 'light',
        items: [
            {
                xtype: 'dataview',
                title: 'Guests',
                defaultType: 'MyDataItem',
                store: 'AttendeesWebStore',
                useComponents: true
            },
            {
                xtype: 'dataview',
                title: 'Google',
                defaultType: 'MyDataItem1',
                store: 'AttendeesGoogleStore',
                useComponents: true
            }
        ]
    }

});