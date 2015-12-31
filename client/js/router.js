Router.configure({
	layoutTemplate : "mainLayout"
});


Router.map(function(){

	this.route('index',{
		path: '/',
		template: 'index',
	});

	this.route('newNote');

});
