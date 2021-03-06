/*
 * File: app/view/readMessage.js
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

Ext.define('Google.view.readMessage', {
    extend: 'Ext.form.Panel',
    alias: 'widget.readMessage',

    requires: [
        'Ext.field.Hidden'
    ],

    config: {
        itemId: 'test1',
        scrollable: false,
        submitOnAction: true,
        items: [
            {
                xtype: 'list',
                docked: 'top',
                height: '80%',
                id: 'MessageRead',
                itemId: 'MessageRead',
                layout: {
                    type: 'fit'
                },
                scrollable: 'vertical',
                itemTpl: Ext.create('Ext.XTemplate', 
                    '',
                    '',
                    '<tpl if="values.user_id == this.getStringValue(values)">',
                    '    <div style="float:right; background-color:#30BFFC; padding:5px; margin-bottom:10px;">',
                    '    <small>{message}</small>',
                    '    </div>',
                    '<tpl else>',
                    '    <div style="float:left; background-color:#D7D7D7; padding:5px; margin-bottom:10px;">',
                    '    <small>{message}</small>',
                    '    </div>',
                    '</tpl>',
                    {
                        getStringValue: function(values) {
                            // Test the new read mesage

                            var store = Ext.getStore('CurrentUser');


                            var rec = store.findRecord('id', '1');
                            var user_id = rec.get('user_id'); // get the allowMessages toggle value


                            return user_id;
                        },
                        disableFormats: true
                    }
                ),
                scrollToTopOnRefresh: false,
                store: 'MessageRead',
                disableSelection: true
            },
            {
                xtype: 'fieldset',
                docked: 'bottom',
                height: '20%',
                items: [
                    {
                        xtype: 'textareafield',
                        height: '70%',
                        id: 'message',
                        name: 'message',
                        placeHolder: 'Reply',
                        maxRows: 2
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'user_id',
                        name: 'user_id'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'from',
                        name: 'from'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'c_id',
                        name: 'c_id'
                    },
                    {
                        xtype: 'hiddenfield',
                        id: 'full_name',
                        name: 'full_name'
                    },
                    {
                        xtype: 'button',
                        itemId: 'mybutton',
                        ui: 'confirm',
                        text: 'Send'
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onMessageReadShow',
                event: 'show',
                delegate: '#MessageRead'
            },
            {
                fn: 'onMybuttonTap1',
                event: 'tap',
                delegate: '#mybutton'
            },
            {
                fn: 'onFormpanelInitialize',
                event: 'initialize'
            },
            {
                fn: 'onTest1Show',
                event: 'show'
            }
        ]
    },

    onMessageReadShow: function(component, options) {
        //This is where the view will scroll to the end of the messages.








    },

    onMybuttonTap1: function(button, e, options) {
        var values = this.getValues();
        //console.log(values);

        this.submit({
            url: 'http://api.eventsy.co.uk/message.php',
            method: 'POST',
            success: function(response) {
                // do whatever you need to with the generated HTML
                Ext.Msg.alert("Sent", "Your message has been sent.");
                this.reset();
                this.up('NavView').pop();
            },
            failure: function(response){
                // Do failure message
                Ext.Msg.alert("Failed", "Sorry, you cannot send a blank message.");
            }
        });
    },

    onFormpanelInitialize: function(component, options) {

        var record = this.getData();

        var username = record.username;
        var userID = record.user_id;
        var from = record.recipient;
        //var message = record.message;
        var c_id = record.c_id;


        // Test the new read mesage

        var store = Ext.getStore('CurrentUser');


        var rec = store.findRecord('id', '1');
        var user_id = rec.get('user_id'); // get the allowMessages toggle value



        //var new_mess = message.replace(/-break-/g, "\n");


        // Stick the name in the recipient field

        Ext.getCmp('full_name').setValue(username);
        Ext.getCmp('user_id').setValue(userID);
        Ext.getCmp('from').setValue(from);
        //Ext.getCmp('fromMessage').setValue(new_mess);
        Ext.getCmp('c_id').setValue(c_id);


        // The MessagRead List Stuff



        var cid = this.getInitialConfig('c_id');



        Ext.getStore('MessageRead').getProxy().setExtraParams({
            'key':'123',
            'section':'message',
            'convo': c_id
        });

        Ext.getStore('MessageRead').load();

        //this.getStore('SpeakerProfilesSearch').getProxy().setExtraParam('agendaspeaker', '1,2');

        console.log("Message Text Loaded.");



        // Contact the web server and make as read


        this.submit({
            url: 'http://api.eventsy.co.uk/setMessage.php?c_id='+ c_id +'&number=1',
            method: 'GET',
            success: function(response) {
                // do whatever you need to with the generated HTML
                console.log("Sent request to server to clear read receipt" + c_id);
                Ext.getStore('MessageRead').load();
            },
            failure: function(response){
                // Do failure message
                console.warn("Server request didn't work "+ c_id);
            }
        });
    },

    onTest1Show: function(component, options) {
        // Scroll to the end of the list.

        MessageRead = this.child('#MessageRead');

        var scroller = MessageRead.getScrollable().getScroller();


        //scroller.refresh().scrollTo(0,496);


        scroller.refresh();


        console.log(scroller);
    }

});