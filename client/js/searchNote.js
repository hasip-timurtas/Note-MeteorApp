Template.searchNote.helpers({
	searchResults:function() {
		var ownerId = Meteor.userId();
		var searchText =Session.get('searchText');
		
		if (searchText) {
		return	Notes.find({
				owner_id: ownerId,
				title:{$regex: searchText + "*"}}
			);
		};
	},
	selectedClass : function() {
      if (Session.get('selected') === this._id) { 
        return "active"; 
        };
    }
});

Template.searchNote.events({
	"keyup .searchNote":function(event) {
		var text = event.currentTarget.value;
		Session.set('searchText',text);
	},
	"click .selected-search-note": function() {
		Session.set('selected',this._id);
		
	}
});
