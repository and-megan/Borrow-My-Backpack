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
var style1 = {
  overlay : {
    display         : 'flex',
    justifyContent  : 'center',
    alignItems      : 'center',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.8)',
    zIndex         : 10
  },
  content : {

    border          : '1px solid #ccc',
    padding         : '20px',
    color           : '#515151',
    zIndex          : 11,
    width           : '400px',
    height          : '400px'
  }
};
var style2 = {
  overlay : {

    display         : 'flex',
    justifyContent  : 'center',
    alignItems      : 'center',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.8)',
    zIndex         : 10
  },
  content : {

    border          : '1px solid #ccc',
    padding         : '20px',
    color           : '#515151',
    zIndex          : 11,
    width           : '400px',
    height          : '555px'
  }
};
var SportingGoodShow = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {

    return {
      sportingGood: {pic_url: "", description: "",
      user_id: "", id: "", user: ""},
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
      return(<div className="success-message" key={message}>{message}</div>);
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
      <div className="request-button-container">
        <button className="user-button" onClick={this.openRequestModal}>Request this {this.state.sportingGood.category}!</button>
      </div>
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
        <ul className='show-edit-delete-container'>
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
          {this.successMessage()}
        <Link className="back-to-listings" to="/">
        &#8592; <u>Back to all listings</u></Link>
        <ul className="sporting-good-container-ul">


          <ul className ="sporting-good-row-1">
            <li>
              <img src={this.state.sportingGood.pic_url} className="sporting-good-show-pic" alt="sporting_good_item_show" />
            </li>
            <li className="sporting-good-show-pic-description">
                <div className="show-description-title">About this {this.state.sportingGood.category}: </div>
              {this.state.sportingGood.description}
            </li>
          </ul>

                  {this.toggleRequestForm()}


                  {this.currentUserEdit()}

          <br></br>

        </ul>
        <Modal
          className='modal'
          style={style1}
          isOpen={this.state.requestModalOpen}
          onRequestClose={this.closeRequestModal}>

          <RequestBox user={this.state.currentUser} sportingGood={this.state.sportingGood} requestModalOpen={this.state.requestModalOpen} onClick={this.closeRequestModal}/>

          <div className="cancel-request">
            <button className="user-button" value="Cancel Request" onClick={this.closeRequestModal}>Cancel</button>
          </div>
        </Modal>

        <Modal
          className='modal'
          style={style2}
          isOpen={this.state.editModalOpen}
          onRequestClose={this.closeEditModal}>
          <div>
            <SportingGoodEdit sportingGood={this.state.sportingGood}/>
          </div>
          <div className="cancel">
            <button className="user-button" value="Cancel" onClick={this.closeEditModal}>Cancel</button>
          </div>
        </Modal>

    </div>
    );
  }

});

module.exports = SportingGoodShow;
