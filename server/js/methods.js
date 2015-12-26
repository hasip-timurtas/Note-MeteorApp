Meteor.methods({
	newNote: function (title,content) {
		if (!Meteor.userId()) {
			throw new Meteor.error("unauthorized","unauthorized");
		};
		var data = {
			title : title,
			content: content,
			owner_id: Meteor.userId(),
			owner: Meteor.user().services.google.email,
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
	},

	shareNote: function(title,content,sharedTo) {
		if (!Meteor.userId()) {
			throw new Meteor.error("unauthorized","unauthorized");
		};


		var data = {
			owner_mail: Meteor.user().services.google.email,
			title : title,
			content: content,
			shared_to: sharedTo,
			entry_date: new Date()
		};

		var sharedId = Shares.insert(data);
	}
});


