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
	},
	shared: {
		type: Boolean,
		optional: true
	}
});

Notes = new Meteor.Collection("notes");
Notes.attachSchema(Schema.Note);


Schema.ShareMail = new 	SimpleSchema({
	userId: {
		type: String
	},
	mail: {
		type: String
	}
});

ShareMails = new Meteor.Collection("shareMail");
ShareMails.attachSchema(Schema.ShareMail);