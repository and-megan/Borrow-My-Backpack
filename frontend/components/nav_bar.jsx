var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
//actions
var UserActions = require('../actions/user_actions');
//Mixin
var CurrentUserState = require('../mixins/current_user_state');
//store
var UserStore = require('../stores/user_store');

var NavBar = React.createClass({
  mixins: [CurrentUserState],
  userAccountToggle: function () {
    if (typeof UserStore.currentUser() === 'undefined') {
      return (
        <div id="nav-bar-login">
          <input type="submit" value="login" onClick={this.login}/>
        </div>
  		);
		} else
    //this needs to be changed when nav bar for real
      return (
        <div id="nav-bar-logout">
  				<input type="submit" value="logout" onClick={this.logout}/>
  			</div>
  		);
  },
  logout: function(e){
    e.preventDefault();
    UserActions.logout();
    hashHistory.push("login");
  },
  login: function (e) {
    e.preventDefault();
    hashHistory.push("login");
  },
  render: function() {

    return (
			<div id="nav-bar">
        <h1 id="app-header">Borrow My Backpack</h1>
        {this.userAccountToggle()}
			</div>
		);
  }

});

module.exports = NavBar;
