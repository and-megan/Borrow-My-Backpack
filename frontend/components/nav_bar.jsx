var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
//actions
var UserActions = require('../actions/user_actions');
//Mixin
var CurrentUserState = require('../mixins/current_user_state');
//store
var UserStore = require('../stores/user_store');
//components
var RequestInbox = require('./request_inbox');

var NavBar = React.createClass({
  mixins: [CurrentUserState],

  logout: function(e){
    e.preventDefault();
    UserActions.logout();
    hashHistory.push("login");
  },
  login: function (e) {
    e.preventDefault();
    hashHistory.push("login");
  },
  goHome: function (e) {
    e.preventDefault();
    hashHistory.push("/");
  },
  userAccountToggle: function () {
    if (typeof UserStore.currentUser() === 'undefined') {
      return (
          <a onClick={this.login}>Log In</a>
      );
    } else
    //this needs to be changed when nav bar for real
      return (
          <a onClick={this.logout}>Log Out</a>
      );
  },
  receivedRequestsInbox: function () {
    return (
      <a onClick={this.goToReceivedRequestInbox}>Requests Received</a>
    );
  },
  goToReceivedRequestInbox: function (e) {
    e.preventDefault();
    hashHistory.push("sporting_goods/received_requests");
  },
  render: function() {

    return (
			<header>
        <h1 id="app-header" onClick={this.goHome}>Borrow My Backpack</h1>
        <ul className="nav-buttons">
          <li className="profile-link">
            <p>&#x2630;</p>
            <ul className="dropdown">
              <li>
                Settings
              </li>
              <li>
                Profile
              </li>
              <li>
                {this.receivedRequestsInbox()}
              </li>
              <li>
                {this.userAccountToggle()}
              </li>
            </ul>
          </li>
        </ul>
			</header>
		);
  }

});

module.exports = NavBar;
