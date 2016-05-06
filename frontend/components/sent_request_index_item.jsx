var React = require('react');


var SentRequestIndexItem = React.createClass({

  render: function() {
    var classColor;
    var displayResponse;
    var displayresponse;
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
            <img src={sentRequest.sporting_good.pic_url} className="received-request-pic" alt="sporting-good-item-pic" />
            <div className="received-request-detail">
              <div>Waiting to hear back about this {sentRequest.sporting_good.category}....</div>

              <div>Dates Requested:
                <div>{sentRequest.start_date}</div>
                <div>{sentRequest.end_date}</div>
              </div>
            </div>

        </div>

      </div>

    );
  }

});

module.exports = SentRequestIndexItem;
// <ul className='completed-request-container'>
//   <li className={classColor}>
//     <h2>{statusResponse}</h2>
//   </li>
//   <li>{sentRequest.sporting_good.category}</li>
//   <li className="sporting-good-index-item">
//     <img src={sentRequest.sporting_good.pic_url} className="received-request-pic" alt="sporting-good-item-pic" />
//   </li>
//   <li>{sentRequest.start_date} to {sentRequest.end_date}</li>
// </ul>
