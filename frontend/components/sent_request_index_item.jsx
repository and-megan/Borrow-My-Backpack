var React = require('react');


var SentRequestIndexItem = React.createClass({

  render: function() {
    var classColor;
    var statusResponse;
    var sentRequest = this.props.sentRequest;
    if (sentRequest.status_response === "APPROVE") {
      classColor = 'completed-request-approve';
      statusResponse = sentRequest.status_response;
    } else if (sentRequest.status_response === "") {
      classColor = 'pending-request';
      statusResponse = 'PENDING';
    }  else {
      classColor = 'completed-request-deny';
      statusResponse = sentRequest.status_response;
    }
    return (
      <ul className='completed-request-container'>
        <li className={classColor}>
          <h2>{statusResponse}</h2>
        </li>
        <li>{sentRequest.sporting_good.category}</li>
        <li className="sporting-good-index-item">
          <img src={sentRequest.sporting_good.pic_url} className="received-request-pic" alt="sporting-good-item-pic" />
        </li>
        <li>{sentRequest.start_date} to {sentRequest.end_date}</li>
      </ul>
    );
  }

});

module.exports = SentRequestIndexItem;
