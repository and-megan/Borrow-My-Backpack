var React = require('react');
var SportingGoodStore = require('../stores/sporting_good_store');
var SportingGoodClientActions = require('../actions/sporting_good_client_actions');


var ClickFilter = React.createClass({
  getInitialState: function() {
    return {
      filters: []

    };
  },

  updateStore: function (filters) {
    SportingGoodClientActions.fetchSportingGoods(filters);
  },
  toggleBackpack: function () {
    if (this.state.filters.indexOf('backpack') === -1) {
      var newFilterState = this.state.filters.concat('backpack');
      this.setState({
        filters: newFilterState
      });
      this.updateStore(newFilterState);
    } else {
      var backpack = this.state.filters.indexOf('backpack');
      var newFilters = this.state.filters.splice(backpack, 1);
      this.setState({
        filters: newFilters
      });
      this.updateStore(this.state.filters);
    }
  },
  toggleBicycle: function () {
    if (this.state.filters.indexOf('bicycle') === -1) {
      var newFilterState = this.state.filters.concat('bicycle');
      this.setState({
        filters: newFilterState
      });
      this.updateStore(newFilterState);
    } else {
      var bicycle = this.state.filters.indexOf('bicycle');
      var newFilters = this.state.filters.splice(bicycle, 1);
      this.setState({
        filters: newFilters
      });
      this.updateStore(this.state.filters);
    }
  },
  toggleKayak: function () {
    if (this.state.filters.indexOf('kayak') === -1) {
      var newFilterState = this.state.filters.concat('kayak');
      this.setState({
        filters: newFilterState
      });
      this.updateStore(newFilterState);
    } else {
      var kayak = this.state.filters.indexOf('kayak');
      var newFilters = this.state.filters.splice(kayak, 1);
      this.setState({
        filters: newFilters
      });
      this.updateStore(this.state.filters);
    }
  },
  toggleSnowboard: function () {
    if (this.state.filters.indexOf('snowboard') === -1) {
      var newFilterState = this.state.filters.concat('snowboard');
      this.setState({
        filters: newFilterState
      });
      this.updateStore(newFilterState);
    } else {
      var snowboard = this.state.filters.indexOf('snowboard');
      var newFilters = this.state.filters.splice(snowboard, 1);
      this.setState({
        filters: newFilters
      });
      this.updateStore(this.state.filters);
    }
  },
  toggleSurfboard: function () {
    if (this.state.filters.indexOf('surfboard') === -1) {
      var newFilterState = this.state.filters.concat('surfboard');
      this.setState({
        filters: newFilterState
      });
      this.updateStore(newFilterState);
    } else {
      var surfboard = this.state.filters.indexOf('surfboard');
      var newFilters = this.state.filters.splice(surfboard, 1);
      this.setState({
        filters: newFilters
      });
      this.updateStore(this.state.filters);
    }
  },
  toggleTent: function () {
    if (this.state.filters.indexOf('tent') === -1) {
      var newFilterState = this.state.filters.concat('tent');
      this.setState({
        filters: newFilterState
      });
      this.updateStore(newFilterState);
    } else {
      var tent = this.state.filters.indexOf('tent');
      var newFilters = this.state.filters.splice(tent, 1);
      this.setState({
        filters: newFilters
      });
      this.updateStore(this.state.filters);
    }
  },
  render: function() {

    return (
      <div>
        <button className="user-button" onClick={this.toggleBackpack}>Backpacks</button>
        <br></br>
        <button className="user-button" onClick={this.toggleBicycle}>Bicycles</button>
        <br></br>
        <button className="user-button" onClick={this.toggleKayak}>Kayaks</button>
        <br></br>
        <button  className="user-button" onClick={this.toggleSnowboard}>Snowboards</button>
        <br></br>
        <button className="user-button" onClick={this.toggleSurfboard}>Surfboard</button>
        <br></br>
        <button className="user-button" onClick={this.toggleTent}>Tent</button>
      </div>
    );
  }

});

module.exports = ClickFilter;
