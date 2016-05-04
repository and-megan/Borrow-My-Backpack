//FANCY LOADING IMAGES
var React = require('react');
var Link = require('react-router').Link;
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var Modal = require("react-modal");
//store
var SportingGoodStore = require('../stores/sporting_good_store');
var RequestStore = require('../stores/request_store');
//actions
var SportingGoodClientActions = require('../actions/sporting_good_client_actions');
var RequestClientActions = require('../actions/request_client_actions');
//mixins
var CurrentUserState = require('../mixins/current_user_state');
//components
var RequestBox = require('./request_box');
var SportingGoodEdit = require('./sporting_good_edit');

var SportingGoodShow = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    return {
      sportingGood: {pic_url: "", description: "",
      user_id: "", id: ""},
      requestModalOpen: false,
      editModalOpen: false,
      messages: []
    };
  },
  componentDidMount: function() {
    this.sportingGoodListener = SportingGoodStore.addListener(this.handleChange);
    SportingGoodClientActions.getSportingGood(parseInt(this.props.params.sportingGoodId));
    RequestClientActions.resetMessages();
    this.requestChangeListener = RequestStore.addListener(this.updateRequests);
  },
  componentWillUnmount: function() {
    this.sportingGoodListener.remove();
    this.requestChangeListener.remove();
  },
  updateRequests: function () {
    this.setState({
      messages: RequestStore.fetchMessages()
    });
  },
  successMessage: function () {
    return(<div>{this.state.messages.map(function (message) {
      return(<div>{message}</div>);
    })}</div>);
  },
  closeRequestModal: function(){
    this.setState({ requestModalOpen: false });
  },
  openRequestModal: function(){
    this.setState({ requestModalOpen: true });
  },
  closeEditModal: function () {
    this.setState({
      editModalOpen: false
    });
  },
  openEditModal: function () {
    this.setState({
      editModalOpen: true
    });
  },
  toggleRequestForm: function () {
    if (this.state.currentUser.id === this.state.sportingGood.user_id) {
      return;
    }
    return (
      <button className="user-button" onClick={this.openRequestModal}>Request this {this.state.sportingGood.category}!</button>
    );
  },
  handleChange: function () {
    var potentialSportingGood = SportingGoodStore.find(this.props.params.sportingGoodId);
    var sportingGood = potentialSportingGood ? potentialSportingGood : {};
    this.setState({
      sportingGood: sportingGood
    });
  },
  currentUserEdit: function () {
    if (this.state.currentUser.id !== this.state.sportingGood.user_id) {
      return "";
    } else {
      return(
        <ul>
          <li>
            <button className="user-button" onClick={this.openEditModal}>Edit Listing</button>
          </li>
          <li>
            <button className="user-button" onClick={this.deleteSportingGood}>Delete Listing</button>
          </li>
        </ul>
      );
    }
  },

  editListing: function () {
    var url = "/sporting_goods/" + this.state.sportingGood.id.toString() + "/edit";
    hashHistory.push(url);
  },
  deleteSportingGood: function () {
    var potentialSportingGood = SportingGoodStore.find(this.props.params.sportingGoodId);
    var sportingGood = potentialSportingGood ? potentialSportingGood : {};
    SportingGoodClientActions.deleteSportingGood(sportingGood);
    hashHistory.push("/");
  },

  render: function() {
    if (!this.state.currentUser || !this.state.sportingGood) {
      return (<div></div>);
    }

    return (
      <div id="sporting-good-container">
        <ul className="sporting-good-container-ul">
          <ul className ="sporting-good-row-1">
            <li>
              <img src={this.state.sportingGood.pic_url} className="sporting-good-show-pic" alt="sporting_good_item_show" />
            </li>
            <li className="sporting-good-show-pic-description">
              {this.state.sportingGood.description}
            </li>
          </ul>

          <br></br>
          {this.currentUserEdit()}
          {this.toggleRequestForm()}
          {this.successMessage()}
        </ul>
        <Modal
          isOpen={this.state.requestModalOpen}
          onRequestClose={this.closeRequestModal}>

          <RequestBox user={this.state.currentUser} sportingGood={this.state.sportingGood} requestModalOpen={this.state.requestModalOpen} onClick={this.closeRequestModal}/>

          <button className="user-button" value="Cancel Request" onClick={this.closeRequestModal}>Cancel</button>

        </Modal>

        <Modal
          isOpen={this.state.editModalOpen}
          onRequestClose={this.closeEditModal}>
          <div>
            <SportingGoodEdit sportingGood={this.state.sportingGood}/>
          </div>
          <button className="user-button" value="Cancel" onClick={this.closeEditModal}>Cancel</button>
        </Modal>
        <Link className="back-to-listings" to="/">View all listings</Link>
    </div>
    );
  }

});

module.exports = SportingGoodShow;
