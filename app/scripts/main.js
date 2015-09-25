/*global MMD, $*/


window.MMD = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
        this.Models.texteditor = new MMD.Models.TextEditor;
        this.Views.texteditor = new MMD.Views.TextEditor({model: this.Models.texteditor});
        this.Views.texteditor.render();

        this.Models.mindmap = new MMD.Models.Mindmap;
        this.Views.mindmap = new MMD.Views.Mindmap({model: this.Models.mindmap});
        this.Views.mindmap.render();
    }
};

$(document).ready(function () {
    'use strict';
    MMD.init();
});
