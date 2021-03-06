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
      <div className="outer-box-p">
        <div className="inner-box-p">
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

module.exports = RequestIndexItemDetail;
