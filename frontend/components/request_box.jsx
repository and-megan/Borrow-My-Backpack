var React = require("react");
var ReactRouter = require('react-router');
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var hashHistory = ReactRouter.hashHistory;
//request api util
var RequestApiUtil = require("../utils/request_api_utils");
//store
var RequestStore = require("../stores/request_store");
//component
var SportingGoodShow = require("./sporting_good_show");

var RequestBox = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    var userId = this.props.user.id;
    var sportingGoodId = this.props.sportingGood.id;
    return {
      start_date: "",
      end_date: "",
      sender_id: userId,
      sporting_good_id: sportingGoodId,
      errors: []
    };
  },
  componentDidMount: function() {
    this.requestListener = RequestStore.addListener(this.onChange);
  },
  componentWillUnmount: function() {
    this.requestListener.remove();
  },
  onChange: function () {
    var errors = RequestStore.allErrors();
    this.setState({
      errors: errors
    });
  },
  handleSubmit: function (e) {
    var userId = this.props.user.id;
    var sportingGoodId = this.props.sportingGood.id;
    e.preventDefault();
    var request = Object.assign({}, this.state);
    RequestApiUtil.createRequest(request);
    this.setState({
      start_date: "",
      end_date: "",
      sender_id: userId,
      sporting_good_id: sportingGoodId,
      errors: [],
    });
    this.props.onClick();
  },
  goToLanding: function () {
    hashHistory.push('/');
  },

  render: function() {
    var button =
      <div className='modal-field'>
        <div className="request-button-container">
          <button type="submit" className="user-button" value="Make Request" >Request it</button>
        </div>
      </div>;

    return (
      <div className="request-box-container">
        <div className="request-heading">
          <text className="modal-title">Want to borrow this {this.props.sportingGood.category}?</text>
        </div>
        <div className="request-form-container">
          <form className="" onSubmit={this.handleSubmit} id="request-form">
            <div className="modal-field">
              <label className="request-field-date-label">Start</label>
              <input
                type="date"
                valueLink={this.linkState('start_date')}
                className="request-field-date"/>
            </div>
            <br/>
            <br/>
            <div className="modal-field">
              <label className="request-field-date-label">End</label>
              <input
                type="date"
                valueLink={this.linkState('end_date')}
                className="request-field-date"/>
            </div>
            <br/>
            <br/>
            {button}
          </form>
          <div className="text-errors">
            <br/>
              {this.state.errors.map(function(error){
                return <p className="error-p-tag">* {error}</p>;
              })}
          </div>
        </div>
      </div>
    );
  }

});

module.exports = RequestBox;
