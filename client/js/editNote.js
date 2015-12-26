Template.editNote.events({
	"click .delete-note": function() {
		var noteId = Session.get('selected');
		var noteTitle = Notes.findOne({_id: noteId}).title;

		BootstrapModalPrompt.prompt({
		    title: "Delete Note",
		    content: "Do you really want to delete <strong>"+ noteTitle +"</strong> note?"
		}, function(result) {
		  if (result) {
		   Meteor.call("deleteNote",noteId);
		  }
		  else {
		    // User did not confirm, do nothing.
		  }
		});
	},

	"click .update-note": function() {
		var noteId = Session.get('selected');
		var noteTitle = $(".note-title").val();
		var noteContent = $(".note-content").val();
		Meteor.call("updateNote",noteId,noteTitle,noteContent);
	},
});
