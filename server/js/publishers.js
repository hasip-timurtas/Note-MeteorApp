Meteor.publish("getNotes",function(ownerId) {
	return Notes.find({owner_id: ownerId});
});

Meteor.publish("getMyShares",function(ownerId) {
	return Shares.find({owner_id: ownerId}); 
});