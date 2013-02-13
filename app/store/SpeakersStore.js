/*
 * File: app/store/SpeakersStore.js
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

Ext.define('Google.store.SpeakersStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Google.model.SpeakersList'
    ],

    config: {
        model: 'Google.model.SpeakersList',
        storeId: 'SpeakersStore',
        proxy: {
            type: 'ajax',
            url: 'http://api.eventsy.co.uk/web-service.php?speakers=true&event=1',
            reader: {
                type: 'json',
                rootProperty: 'categories'
            }
        }
    }
});