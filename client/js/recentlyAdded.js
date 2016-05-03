Template.recentlyAdded.helpers({
	recents: function() {
		//return Notes.find({});
		return Notes.find({},{
								sort: { entry_date: -1}
								/*,limit : 4*/
						 	});


	},
	selectedClass : function() {
      if (Session.get('selected') === this._id) { 
        	return "active"; 
        };
    }
});


Template.recentlyAdded.events({
	"click .recent-note": function() {
		Session.set('selected',this._id); // this._id is NoteID. 
	}
});