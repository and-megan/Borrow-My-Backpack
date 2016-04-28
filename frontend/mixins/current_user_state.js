var UserStore = require('../stores/user_store');
var UserActions = require('../actions/user_actions');

var CurrentUserState = {

	getInitialState: function(){
		return {
			currentUser: UserStore.currentUser(),
			userErrors: UserStore.errors()
		};
	},
	componentDidMount: function(){
		this.curUserListener = UserStore.addListener(this.updateUser);
		if (typeof UserStore.currentUser() === 'undefined') {
			UserActions.fetchCurrentUser();
		}
	},
	componentWillUnmount: function() {
		this.curUserListener.remove();
	},
	updateUser: function(){
		this.setState({
			currentUser: UserStore.currentUser(),
			userErrors: UserStore.errors()
		});
	}

};

module.exports = CurrentUserState;
