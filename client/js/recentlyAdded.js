Template.recentlyAdded.helpers({
	recents: function() {
		//alert("recents");
		return Notes.find({});

	},
	selectedClass : function() {
      if (Session.get('selected') === this._id) { 
        return "active"; 
        };
    }
});


Template.recentlyAdded.events({
	"click .recent-note": function() {
		Session.set('selected',this._id);
		var noteId= this._id;
		var selectedNote = Notes.findOne({_id: noteId});
		// for changing backgound

		Session.set('selectedNoteId', selectedNote._id);
	}
});