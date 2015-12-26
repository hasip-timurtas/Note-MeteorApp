Meteor.publish("getNotes",function(ownerId) {
	return Notes.find({owner_id: ownerId});
});