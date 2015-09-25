/*global MMD, Backbone*/

MMD.Models = MMD.Models || {};

(function () {
    'use strict';

    MMD.Models.TextEditor = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
