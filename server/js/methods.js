Meteor.methods({
	newNote:function (title,content) {
		if (!Meteor.userId()) {
			throw new Meteor.error("unauthorized","unauthorized");
		};
		var data = {
			title : title,
			content: content,
			owner_id: Meteor.userId(),
			owner: Meteor.user().profile.name
		};

		var postId = Notes.insert(data);
		return postId;
	}
});