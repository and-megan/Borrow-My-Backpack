var React = require('react');


var ReceivedRequestItem = React.createClass({

  render: function() {
    var receivedRequest = this.props.receivedRequest;
    return (
      <li className="request-index-item">
        <ul>
          <li>{receivedRequest.sender_id}</li>
          <li>{receivedRequest.sporting_good_id}</li>
          <li>{receivedRequest.message}</li>
          <li>{receivedRequest.start_date}</li>
          <li>{receivedRequest.end_date}</li>
        </ul>
      </li>
    );
  }

});

module.exports = ReceivedRequestItem;
