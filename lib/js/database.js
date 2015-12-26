Schema = {};

Schema.Note = new SimpleSchema({
	title: {
		type : String
	},
	content: {
		type: String
	},
	owner_id:{
		type: String
	},
	owner: {
		type: String
	}
});


Notes = new Meteor.Collection("notes");

Notes.attachSchema(Schema.Note);