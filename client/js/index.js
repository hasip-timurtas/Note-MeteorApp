Template.index.helpers({
	selectedNote: function() {
		var noteId = Session.get('selected');
		return Notes.findOne({_id: noteId});
	}
});


Template.registerHelper('formatDate', function(date) {
  return moment(date).format('DD.MM.YYYY hh:mm:ss a');
});
