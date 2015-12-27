Accounts.onCreateUser(function(options, user) {

	if (options.profile){
   		user.profile = options.profile;
    }

	var data= {
		userId: user._id,
		mail: user.services.google.email
	};

	ShareMails.insert(data);
	return user;
});
