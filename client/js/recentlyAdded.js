Template.recentlyAdded.helpers({
	recents: function() {
		return Notes.find({});
	},
	selectedClass : function() {
      if (Session.get('selected') === this._id) { 
        return "selected"; 
        };
    }
});


Template.recentlyAdded.events({
	"click .recent-note": function() {
		var noteId= this._id;
		var selectedNote = Notes.findOne({_id: noteId});

		//Session.set('selected',this._id);
		Session.set('selectedNoteId', selectedNote._id);
		Session.set('selectedTitle', selectedNote.title);
		Session.set('selectedContent', selectedNote.content);
	}
});