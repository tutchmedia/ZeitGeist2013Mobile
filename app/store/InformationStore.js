/*
 * File: app/store/InformationStore.js
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

Ext.define('Google.store.InformationStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Google.model.InformationDesk'
    ],

    config: {
        data: [
            {
                id: '1',
                title: 'Information Desk',
                info: 'For you convenience, an Information Desk will be located outside the main session room.<br /><br />Throughout the event to address questions when they arise.On Sunday this desk will be located outside the Ivory Foyer. The opening times can be found below:<br /><br />'
            },
            {
                id: '2',
                title: 'Transportation',
                info: ''
            },
            {
                id: '3',
                title: 'Venue Map',
                info: ''
            },
            {
                id: '4',
                title: 'Wireless Connectivity',
                info: ''
            },
            {
                id: '5',
                title: 'Zeitgeist Minds',
                info: ''
            },
            {
                id: '6',
                title: 'Attire',
                info: ''
            }
        ],
        model: 'Google.model.InformationDesk',
        storeId: 'InformationStore'
    }
});