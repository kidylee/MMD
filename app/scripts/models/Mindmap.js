/*global MMD, Backbone*/

MMD.Models = MMD.Models || {};

(function () {
    'use strict';

    MMD.Models.Mindmap = Backbone.Model.extend({

        url: '',

        initialize: function() {
            this.listenTo(MMD.Models.texteditor, 'change:text',this.update);
            this.set('text','');
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        },

        update: function () {
            this.set('text',MMD.Models.texteditor.get('text'));
        }
    });

})();
