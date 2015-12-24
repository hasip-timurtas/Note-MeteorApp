Router.route("/",{
	name : "index",
	layoutTemplate : "mainLayout",
	waitOn: function() {
		return Meteor.subscribe("notes");
	},
	action : function() {
		this.render("index");
	}
});

Router.route("/create-note",{
	name : "createNote",
	layoutTemplate : "mainLayout",
	action : function() {
		this.render("newNote");
	}
});