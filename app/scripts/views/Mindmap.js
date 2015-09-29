/*global MMD, Backbone, JST*/

MMD.Views = MMD.Views || {};

(function () {
    'use strict';

    MMD.Views.Mindmap = Backbone.View.extend({

        template: JST['app/scripts/templates/Mindmap.ejs'],

        el: '#mindMap',



        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
