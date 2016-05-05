var React = require('react');
var ReactRouter = require('react-router');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var hashHistory = ReactRouter.hashHistory;
//request api util
var RequestApiUtil = require("../utils/request_api_utils");
//actions
var RequestClientActions = require('../actions/request_client_actions');
//store
var RequestStore = require("../stores/request_store");
var UserStore = require("../stores/user_store");
var SportingGoodStore = require("../stores/sporting_good_store");
//components
var RequestIndexItemDetail = require('./request_index_item_detail');



var ReceivedRequestIndexItem = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    var receivedRequest = this.props.receivedRequest;
    if (receivedRequest.id) {
      receivedRequest = RequestStore.find(receivedRequest.id);
    } else {
      receivedRequest = {requestApproval: ""};
    }
    return {
      receivedRequest: receivedRequest,
      requestApproval: receivedRequest.requestApproval,
    };
  },

  componentWillReceiveProps: function(nextProps) {
    var receivedRequest = nextProps.receivedRequest;
    this.setState({
      receivedRequest: receivedRequest,
      requestApproval: receivedRequest.requestApproval
    });
  },

  updateApproval: function () {
    this.setState({
      requestApproval: "APPROVE"
    });
  },
  updateDenial: function () {
    this.setState({
      requestApproval: "DENY"
    });
  },
  handleSubmit: function (event) {
    event.preventDefault();
    var potentialRequest = RequestStore.find(this.props.receivedRequest.id);
    var thisRequest = potentialRequest ? potentialRequest : {};
    var requestData = {
      id: thisRequest.id,
      requestApproval: this.state.requestApproval
    };
    RequestApiUtil.updateRequest(requestData);

    hashHistory.push("sporting_goods/received_requests");
  },

  render: function() {
    var receivedRequest = this.props.receivedRequest;
    return (
      <li className="request-index-item">
        <div className="request-index-item-info">
          <RequestIndexItemDetail key={receivedRequest.id} receivedRequest={receivedRequest}/>
        </div>

          <form onSubmit={this.handleSubmit}>

            <section>
              <label> Approve
                <input type="Radio" name="action" value={receivedRequest.requestApproval}
                checked={this.state.requestApproval === "APPROVE"}
                onChange={this.updateApproval}/>
              </label>

              <label> Deny
                <input type="Radio" name="action" value={receivedRequest.requestApproval}
                checked={this.state.requestApproval === "DENY"}
                onChange={this.updateDenial}/>
              </label>
            </section>



            <button className="user-button" type="submit"  value="Send a response">Send a response</button>
          </form>

      </li>
    );
  }
});

module.exports = ReceivedRequestIndexItem;
