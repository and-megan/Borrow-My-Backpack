var React = require('react');
//actions


var FinishedRequestDetail = React.createClass({
  getInitialState: function() {
    return {

    };
  },

  render: function() {
    var classColor;
    var receivedRequest = this.props.receivedRequest;
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
        <li>{receivedRequest.sender.email}</li>
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
