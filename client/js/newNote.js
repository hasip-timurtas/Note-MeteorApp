Template.newNote.events({
	"submit .new-note": function(event) {
		var title = event.target.title.value;
		var content = event.target.content.value;
		Meteor.call("newNote",title,content,function(err,result) {
			Session.set('selected',result); // result is noteId of inserted value
		});

		Router.go('/');
		event.preventDefault();// Sayfanın postback olmaması için.
	}
});