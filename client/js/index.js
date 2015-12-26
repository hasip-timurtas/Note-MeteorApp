Template.index.helpers({
	selectedNote: function() {
		var noteId = Session.get('selectedNoteId');
		return Notes.findOne({_id: noteId});
	}
});

