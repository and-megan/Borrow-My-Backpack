var React = require('react');
//actions


var RequestIndexItemDetail = React.createClass({
  getInitialState: function() {
    return {

    };
  },

  render: function() {
    var receivedRequest = this.props.receivedRequest;

    return (
      <ul>
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

module.exports = RequestIndexItemDetail;