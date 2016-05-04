var AppDispatcher = require('../dispatcher/dispatcher');
var ServerActions = require('../actions/server_actions.js');

var UserApiUtil = {

	post: function(options){

		$.ajax({
			url: options.url,
			type: "POST",
			data: {user: options.user},
			success: options.success,
			error: options.error
		});
	},
	logout: function(success, error){
		$.ajax({
			url: '/api/session',
			method: 'delete',
			success: success,
			error: error
		});
	},
	fetchCurrentUser: function(success, error){

		$.ajax({
			url: '/api/session',
			method: 'get',
			success: success,
			error: error
		});
	},
	getUser: function (id) {

		$.ajax({
			url: 'api/user/' + id.toString(),
			method: 'get',
			success: function (user) {
				ServerActions.receiveUser(user);
			},
			error: function () {
				console.log("nooooooo");
			}
		});
	},
	fetchUsers: function () {
		$.ajax({
			url:"api/user",
			success: function(users) {
				ServerActions.receiveUsers(users);
			}
		});
	}
};

module.exports = UserApiUtil;
