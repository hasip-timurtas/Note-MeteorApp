Template.index.helpers({
	selectedNoteId: function() {
		return Session.get('selectedNoteId');
	},
	selectedTitle: function() {
		return Session.get('selectedTitle');
	},
	selectedContent: function() {
		return Session.get('selectedContent');
	}
});