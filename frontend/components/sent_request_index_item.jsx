var React = require('react');


var SentRequestIndexItem = React.createClass({

  render: function() {
    var sentRequest = this.props.sentRequest;
    return (
      <li className="request-index-item">
        <ul>
          <li>{sentRequest.sporting_good_id}</li>
          <li>{sentRequest.message}</li>
          <li>{sentRequest.start_date}</li>
          <li>{sentRequest.end_date}</li>
        </ul>
      </li>
    );
  }

});

module.exports = SentRequestIndexItem;
