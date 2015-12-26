Meteor.methods({
	newNote: function (title,content) {
		if (!Meteor.userId()) {
			throw new Meteor.error("unauthorized","unauthorized");
		};
		var data = {
			title : title,
			content: content,
			owner_id: Meteor.userId(),
			owner: Meteor.user().profile.name,
			entry_date: new Date()
		};

		var postId = Notes.insert(data);
		return postId;
	},

	deleteNote: function(noteId) {
		Notes.remove(noteId);
	},

	updateNote: function(noteId,newTitle,newContent) {
		 Notes.update(noteId, {
        	$set: {title: newTitle, content: newContent}
      });
	}
});
