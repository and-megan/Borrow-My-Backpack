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
  noMessages: function () {
    if (this.state.sentRequests.length < 1) {
      return (<div className='no-requests'>NO CURRENT REQUESTS</div>);
    }
  },
  render: function() {

    var SentIndexItemsTags = this.state.sentRequests.map(function(sentRequest) {
      return(<SentRequestIndexItem key={sentRequest.id} sentRequest={sentRequest} />);
    });
    return (
      <div className="requests-container">
        <div className='inbox-h1-container'>
          <ul className="tabrow">
            <li className='tabrow-2'><a onClick={this.goToReceivedRequests}>Received Requests</a></li>
            <li className='tabrow-1'><a>Sent Requests</a></li>
          </ul>

        </div>
          <ul className="group-requests">
            {SentIndexItemsTags}
            {this.noMessages()}
          </ul>
      </div>
    );
  }

});

module.exports = SentRequestInbox;
