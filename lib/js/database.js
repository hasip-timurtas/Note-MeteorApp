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
	},
	entry_date : {
		type : Date
	}
});


Notes = new Meteor.Collection("notes");
Notes.attachSchema(Schema.Note);