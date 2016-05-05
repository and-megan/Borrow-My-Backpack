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
    var receivedRequest = this.state.receivedRequest;
    if (receivedRequest.status_response === "APPROVE") {
      classColor = 'completed-request-approve';
    } else {
      classColor = 'completed-request-deny';
    }

    return (
      <ul className='completed-request-container'>
        <li className={classColor}>
          <h2>{receivedRequest.status_response}</h2>
        </li>

        <li>{receivedRequest.sporting_good.category}</li>
        <li className="sporting-good-index-item">
          <img src={receivedRequest.sporting_good.pic_url} className="received-request-pic" alt="sporting-good-item-pic" />
        </li>
        <li>{receivedRequest.start_date} to {receivedRequest.end_date}</li>
      </ul>
    );
  }

});

module.exports = FinishedRequestDetail;
