/*global MMD, Backbone, JST*/

MMD.Views = MMD.Views || {};

(function () {
    'use strict';

    MMD.Views.TextEditor = Backbone.View.extend({

        template: JST['app/scripts/templates/TextEditor.ejs'],

        el: '#textEditor',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }

    });

})();