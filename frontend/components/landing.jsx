var React = require('react');
var History = require('react-router').History;
var hashHistory = require('react-router').hashHistory;
//Mixin
var CurrentUserState = require('../mixins/current_user_state');
//components
var LoginForm = require('./login_form');
//Store
var UserStore = require('../stores/user_store');

var Landing = React.createClass({
  mixins: [CurrentUserState],
  componentDidMount: function() {
    this.userStoreListener = UserStore.addListener(this.pushLogin);

  },
  componentWillUnmount: function() {
    this.userStoreListener.remove();
  },
  pushLogin: function () {
    if (!UserStore.currentUser()) {
      hashHistory.push("login");
    }
  },
  render: function() {

    return (
      <div>
        {this.props.children}
      </div>
    );
  }

});

module.exports = Landing;
