var React = require('react');
//actions
var RequestClientActions = require('../actions/request_client_actions');
//stores
var RequestStore = require('../stores/request_store');

var FinishedRequestDetail = React.createClass({
  getInitialState: function() {
    var receivedRequest = this.props.receivedRequest;
    return {
      receivedRequest: receivedRequest
    };
  },

  componentWillReceiveProps: function(nextProps) {
    var receivedRequest = nextProps.receivedRequest;
    this.setState({
      receivedRequest: receivedRequest
    });
  },
  deleteListing: function () {
    var requestId = this.props.receivedRequest.id;
    RequestClientActions.deleteRequest(requestId);
  },
  render: function() {

    var classColor;
    var displayresponse;
    var displayResponse;
    var receivedRequest = this.state.receivedRequest;
    if (receivedRequest.status_response === "APPROVE") {
      classColor = 'inner-box';
      displayresponse = 'APPROVED';
      displayResponse = 'APPROVED';
    } else {
      classColor = 'inner-box-d';
      displayresponse = 'DENIED';
      displayResponse = 'DENIED';
    }

    return (
      <div className="outer-box">
        <div className={classColor}>
          <div className='delete-me' onClick={this.deleteListing}>X</div>
            <img src={receivedRequest.sporting_good.pic_url} className="received-request-pic" alt="sporting-good-item-pic" />
            <div className="received-request-detail">
              <div className='wants-to-borrow'>{receivedRequest.sender.email} wants to borrow your {receivedRequest.sporting_good.category}!</div>

              <div className='request-dates'>Dates Requested:
                <div className='mm-dd'>{receivedRequest.start_date} to {receivedRequest.end_date}</div>
              </div>
            </div>

        </div>

      </div>
    );
  }

});

module.exports = FinishedRequestDetail;
