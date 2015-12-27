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

	"click .share-note": function() {
		

		BootstrapModalPrompt.prompt({
		    title: "Write an e-mail adress for sharing the note",

		    content: "<input class='form-control note-title share-mail' type='email' placeholder='email'> "
		}, function(result) {
		  if (result) {

		  	var noteId = Session.get('selected');
			var noteTitle = $(".note-title").val();
			var noteContent = $(".note-content").val();
		  	var email = $(".share-mail").val();
			Meteor.call("shareNote",noteTitle,noteContent,email);
		  }
		 
		});



	}
});
