var React = require('react');
//Mixin
var CurrentUserState = require('../mixins/current_user_state');
//store
var RequestStore = require("../stores/request_store");
//actions
var RequestClientActions = require("../actions/request_client_actions");


var RequestInbox = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    return {
      requests: []
    };
  },
  onChange: function () {
    this.setState({
      requests: RequestStore.all()
    });
  },
  componentDidMount: function() {
    this.requestsSentListener = RequestStore.addListener(this.onChange);
    RequestClientActions.fetchRequests();
  },
  componentWillUnmount: function() {
    this.requestsSentListener.remove();
  },
  componentWillReceiveProps: function() {
    this.setState({
      requests: RequestStore.all()
    });
  },
  render: function() {
    return (
      <div />
    );
  }

});

module.exports = RequestInbox;
