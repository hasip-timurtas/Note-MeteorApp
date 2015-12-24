Template.newNote.events({
	"submit .new-note": function(event) {
		var title = event.target.title.value;
		var content = event.target.content.value;
		Meteor.call("newNote",title,content);

		event.preventDefault();// Sayfanın postback olmaması için.
	}
});