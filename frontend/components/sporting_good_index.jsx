var React = require('react');
var History = require('react-router').History;
var Modal = require("react-modal");
//actions
var SportingGoodClientActions = require('../actions/sporting_good_client_actions');
//store
var SportingGoodStore = require('../stores/sporting_good_store');
//components
var SportingGoodForm = require('./sporting_good_form');
var SportingGoodIndexItem = require('./sporting_good_index_item');
var Map = require('./map');


var SportingGoodIndex = React.createClass({
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
  toggleNewListingForm: function () {
    return (
      <button className="user-button" onClick={this.openFormModal}>Make a new listing!</button>
    );
  },
  render: function() {
    var SportingGoodIndexItemsTags = this.state.sportingGoods.map(function(sportingGood) {
      return(<SportingGoodIndexItem key={sportingGood.id} sportingGood={sportingGood} className="sporting-good-item"/>);
    });
    return (
      <div className="sporting-good-index-container">
        {this.toggleNewListingForm()}
          <Modal
            isOpen={this.state.formModalOpen}
            onRequestClose={this.closeFormModal}>
            <div>
              <SportingGoodForm sportingGood={this.state.sportingGood}
              onClick={this.closeFormModal}/>
            </div>
            <button className="user-button" value="Cancel" onClick={this.closeFormModal}>Cancel</button>
          </Modal>
        <div className="map-sg-index">
          <Map
            sportingGoods={this.state.sportingGoods}
            onMapClick={this.handleMapClick}
            onMarkerClick={this.handleMarkerClick}/>
        </div>
        <ul className = "list-group">
          {SportingGoodIndexItemsTags}
        </ul>
      </div>
    );
  }

});

module.exports = SportingGoodIndex;
