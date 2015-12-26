Router.route("/",{
	name : "index",
	layoutTemplate : "mainLayout",
	waitOn: function() {
		Meteor.subscribe("getNotes",Meteor.userId());	
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

Router.route("/shares",{
	name : "shares",
	layoutTemplate : "mainLayout",
	action : function() {
		this.render("shares");
	}
});