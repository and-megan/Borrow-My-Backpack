var React = require('react');
var ReactRouter = require('react-router');

var hashHistory = ReactRouter.hashHistory;
var Modal = require("react-modal");
//actions
var SportingGoodClientActions = require('../actions/sporting_good_client_actions');
//store
var SportingGoodStore = require('../stores/sporting_good_store');
//components
var SportingGoodForm = require('./sporting_good_form');
var SportingGoodIndexItem = require('./sporting_good_index_item');
var Map = require('./map');
var ClickFilter = require('./click_filter');
//Mixin
var CurrentUserState = require('../mixins/current_user_state');
var style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.8)',
    zIndex         : 10
  },
  content : {
    position        : 'fixed',
    top             : '40px',
    left            : '350px',
    right           : '150px',
    bottom          : '100px',
    border          : '1px solid #ccc',
    padding         : '20px',
    color           : '#515151',
    zIndex          : 11,
    width           : '400px',
    height          : '555px'
  }
};
var SportingGoodIndex = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    return {
      sportingGoods: [],
      formModalOpen: false
    };
  },
  componentDidMount: function() {
    this.sportingGoodListener = SportingGoodStore.addListener(this.getSportingGoods);
    SportingGoodClientActions.fetchSportingGoods();
  },
  componentWillUnmount: function() {
    this.sportingGoodListener.remove();
  },
  getSportingGoods: function () {
    this.setState({
      sportingGoods: SportingGoodStore.all()
    });
  },
  componentWillReceiveProps: function () {
    this.setState({
      sporting_goods: SportingGoodStore.all(),
      curUser: this.state.currentUser
    });
  },
  openFormModal: function () {
    this.setState({
      formModalOpen: true
    });
  },
  closeFormModal: function () {
    this.setState({
      formModalOpen: false
    });
  },
  handleMarkerClick: function () {
    var sportingGoodId = this.state.sportingGoodId;
    hashHistory.push('sporting_goods/' + sportingGoodId.toString());
  },
  toggleNewListingForm: function () {
    return (
      <div className="new-listing-wrap"><button className="user-button" onClick={this.openFormModal}>Make a new listing!</button></div>
    );
  },
  render: function() {
    var SportingGoodIndexItemsTags = this.state.sportingGoods.map(function(sportingGood) {
      return(<SportingGoodIndexItem key={sportingGood.id} sportingGood={sportingGood} className="sporting-good-item"/>);
    });
    return (
      <div className="sporting-good-index-container">
        {this.toggleNewListingForm()}
        <div className="sporting-good-index-view">
          <ClickFilter />
          <Modal
            style={style}
            isOpen={this.state.formModalOpen}
            onRequestClose={this.closeFormModal}>
            <div>
              <SportingGoodForm sportingGood={this.state.sportingGood}
              onClick={this.closeFormModal}/>
            </div>
            <div className="cancel">
              <button className="user-button" value="Cancel" onClick={this.closeFormModal}>Cancel</button>
            </div>
          </Modal>

          <ul className = "list-group">
            {SportingGoodIndexItemsTags}
          </ul>

          <div className="map-sg-index">
            <Map
              sportingGoods={this.state.sportingGoods}
              onMapClick={this.handleMapClick}
              onMarkerClick={this.handleMarkerClick}/>
          </div>

        </div>
      </div>
    );
  }

});

module.exports = SportingGoodIndex;
