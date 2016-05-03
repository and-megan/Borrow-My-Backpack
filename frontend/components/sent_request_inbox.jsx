var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
//Mixin
var CurrentUserState = require('../mixins/current_user_state');
//store
var RequestStore = require("../stores/request_store");
//actions
var RequestClientActions = require("../actions/request_client_actions");
var SentRequestIndexItem = require('./sent_request_index_item');

var SentRequestInbox = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    return {
      sentRequests: []
    };
  },
  componentDidMount: function() {
    this.sentRequestsListener = RequestStore.addListener(this.getSentRequests);
    RequestClientActions.fetchSentRequests();
  },
  componentWillUnmount: function() {
    this.sentRequestsListener.remove();
  },
  getSentRequests: function () {

    this.setState({
      sentRequests: RequestStore.all()
    });
  },
  handleClickOnStatus: function () {

  },
  goToReceivedRequests: function () {
    hashHistory.push("sporting_goods/received_requests");
  },
  render: function() {

    var SentIndexItemsTags = this.state.sentRequests.map(function(sentRequest) {
      return(<SentRequestIndexItem key={sentRequest.id} sentRequest={sentRequest} />);
    });
    return (
      <div className="requests-sent-container">
        <h1>Sent Requests</h1>
        <div>
          <a className="link" onClick={this.goToReceivedRequests}>See your received requests</a>
        </div>
        <ul className="group-requests">
          {SentIndexItemsTags}
        </ul>
      </div>
    );
  }

});

module.exports = SentRequestInbox;
