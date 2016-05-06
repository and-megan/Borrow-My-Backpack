var React = require('react');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
//Mixin
var CurrentUserState = require('../mixins/current_user_state');
//store
var RequestStore = require("../stores/request_store");
//actions
var RequestClientActions = require("../actions/request_client_actions");
//components
var ReceivedRequestIndexItem = require('./received_request_index_item');
var FinishedRequestDetail = require('./finished_request_detail');

//FOR DEALING WITH RECEIVED REQUESTS

var RequestInbox = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    return {
      receivedRequests: []
    };
  },
  componentDidMount: function() {
    this.receivedRequestsListener = RequestStore.addListener(this.getReceivedRequests);
    RequestClientActions.fetchReceivedRequests();
  },
  componentWillUnmount: function() {
    this.receivedRequestsListener.remove();
  },
  getReceivedRequests: function () {
    this.setState({
      receivedRequests: RequestStore.all()
    });
  },
  goToSentRequests: function () {
    hashHistory.push('sporting_goods/sent_requests');
  },
  render: function() {

    var RequestIndexItemsTags = this.state.receivedRequests.map(function(receivedRequest) {
      if (receivedRequest.status_response === "") {
        return(<ReceivedRequestIndexItem key={receivedRequest.id} receivedRequest={receivedRequest} />);
      } else {
        return (
          <FinishedRequestDetail key={receivedRequest.id} receivedRequest={receivedRequest}/>
        );
      }
    });
    return (
      <div className="requests-container">
        <div className='inbox-h1-container'>
        <ul className="tabrow">
          <li className='tabrow-1'><a>Received Requests</a></li>
          <li className='tabrow-2'><a onClick={this.goToSentRequests}>Sent Requests</a></li>
        </ul>

        </div>
        <ul className="group-requests">
          {RequestIndexItemsTags}
        </ul>
      </div>
    );
  }

});

module.exports = RequestInbox;
