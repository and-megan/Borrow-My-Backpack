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
  // componentDidMount: function() {
  //   this.finishedRequest = RequestStore.addListener(this.getFinishedRequest);
  //   RequestClientActions.getRequest(this.props.receivedRequest.id);
  // },
  // componentWillUnmount: function() {
  //   this.finishedRequest.remove();
  // },
  componentWillReceiveProps: function(nextProps) {
    var receivedRequest = nextProps.receivedRequest;
    this.setState({
      receivedRequest: receivedRequest
    });
  },
  // getFinishedRequest: function () {
  //   var id = this.state.receivedRequest.id;
  //   this.setState({
  //     receivedRequest: RequestStore.find(id)
  //   });
  // },
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
            <img src={receivedRequest.sporting_good.pic_url} className="received-request-pic" alt="sporting-good-item-pic" />
            <div className="received-request-detail">
              <div className='wants-to-borrow'>{receivedRequest.sender.email} wants to borrow your {receivedRequest.sporting_good.category}!</div>

              <div className='request-dates'>Dates Requested:
                <div>{receivedRequest.start_date} to {receivedRequest.end_date}</div>

              </div>
            </div>

        </div>

      </div>
    );
  }

});

module.exports = FinishedRequestDetail;
