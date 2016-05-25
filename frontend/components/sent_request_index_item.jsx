var React = require('react');
var RequestClientActions = require('../actions/request_client_actions');

var SentRequestIndexItem = React.createClass({
  getInitialState: function() {
    var sentRequest = this.props.sentRequest;
    return {
      sentRequest: sentRequest
    };
  },
  componentWillReceiveProps: function(nextProps) {
    var sentRequest = nextProps.sentRequest;
    this.setState({
      sentRequest: sentRequest
    });
  },
  message: function () {
    if (this.props.sentRequest.status_response === "") {
      return (<div className='wants-to-borrow'>Waiting to hear back about this {this.props.sentRequest.sporting_good.category}.</div>);
    }
  },
  deleteListing: function () {
    var requestId = this.props.sentRequest.id;
    RequestClientActions.deleteRequest(requestId);
  },
  render: function() {
    var classColor;
    var displayResponse;
    var displayresponse;
    var message = "";
    var outerBox;
    var sentRequest = this.props.sentRequest;
    if (sentRequest.status_response === "APPROVE") {
      outerBox = 'outer-box';
      classColor = 'inner-box';
      displayresponse = 'APPROVED';
      displayResponse = 'APPROVED';
    } else if (sentRequest.status_response === "") {
      outerBox = 'outer-box-p';
      classColor = 'inner-box-p';
      displayresponse = 'PENDING';
      displayResponse = 'PENDING';
    }  else {
      outerBox = 'outer-box';
      classColor = 'inner-box-d';
      displayresponse = 'DENIED';
      displayResponse = 'DENIED';
    }

    return (
      <div className={outerBox}>
        <div className={classColor}>
          <div className='delete-me' onClick={this.deleteListing}>X</div>
            <img src={sentRequest.sporting_good.pic_url} className="received-request-pic" alt="sporting-good-item-pic" />
            <div className="received-request-detail">
            {this.message()}

              <div className='request-dates'>Dates Requested:
                <div>{sentRequest.start_date} to {sentRequest.end_date}</div>
              </div>
            </div>

        </div>

      </div>

    );
  }

});

module.exports = SentRequestIndexItem;
