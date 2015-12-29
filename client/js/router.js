Router.configure({
	layoutTemplate : "mainLayout"
});


Router.map(function(){

	this.route('index',{
		path: '/',
		template: 'index',
		waitOn: function() {
				Meteor.subscribe("getNotes");	
		}
	});

	this.route('newNote');

});
