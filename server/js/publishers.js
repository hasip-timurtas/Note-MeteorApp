Meteor.publish("getNotes",function() {
	return Notes.find({owner_id: this.userId});
});
