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

Schema.Share = new SimpleSchema({
	owner_mail: {
		type: String
	},
	title: {
		type : String
	},
	content: {
		type: String
	},
	shared_to:{
		type: String
	},
	entry_date : {
		type : Date
	}
});



Notes = new Meteor.Collection("notes");
Notes.attachSchema(Schema.Note);

Shares = new Meteor.Collection("shares");
Shares.attachSchema(Schema.Share);
