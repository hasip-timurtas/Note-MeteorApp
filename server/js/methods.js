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

		var noteId = Notes.insert(data);
		return noteId;
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

		var sharedToUser = ShareMails.findOne({mail: sharedTo});
		var data = {
			title : title,
			content: content,
			owner_id: sharedToUser.userId,
			owner: sharedTo,
			entry_date: new Date(),
			shared: true
		};

		var noteId = Notes.insert(data);
	}
});

