var React = require('react');


var ClickFilter = React.createClass({
  getInitialState: function() {
    return {
      filters: []
    };
  },
  toggleBackpack: function () {

    if (this.state.filters.indexOf('backpack') === -1) {
      this.setState({
        filters: this.state.filters.concat('backpack')
      });
    } else {
      var backpack = this.state.filters.indexOf('backpack');
      var newFilters = this.state.filters.splice(backpack, 1);
      this.setState({
        filters: newFilters
      });
    }
  },
  toggleBicycle: function () {
    if (this.state.filters.indexOf('bicycle') === -1) {
      this.setState({
        filters: this.state.filters.concat('bicycle')
      });
    } else {
      var bicycle = this.state.filters.indexOf('bicycle');
      var newFilters = this.state.filters.splice(bicycle, 1);
      this.setState({
        filters: newFilters
      });
    }
  },
  toggleKayak: function () {
    if (this.state.filters.indexOf('kayak') === -1) {
      this.setState({
        filters: this.state.filters.concat('kayak')
      });
    } else {
      var kayak = this.state.filters.indexOf('kayak');
      var newFilters = this.state.filters.splice(kayak, 1);
      this.setState({
        filters: newFilters
      });
    }
  },
  toggleSnowboard: function () {
    if (this.state.filters.indexOf('snowboard') === -1) {
      this.setState({
        filters: this.state.filters.concat('snowboard')
      });
    } else {
      var snowboard = this.state.filters.indexOf('snowboard');
      var newFilters = this.state.filters.splice(snowboard, 1);
      this.setState({
        filters: newFilters
      });
    }
  },
  toggleSurfboard: function () {
    if (this.state.filters.indexOf('surfboard') === -1) {
      this.setState({
        filters: this.state.filters.concat('surfboard')
      });
    } else {
      var surfboard = this.state.filters.indexOf('surfboard');
      var newFilters = this.state.filters.splice(surfboard, 1);
      this.setState({
        filters: newFilters
      });
    }
  },
  toggleTent: function () {
    if (this.state.filters.indexOf('tent') === -1) {
      this.setState({
        filters: this.state.filters.concat('tent')
      });
    } else {
      var tent = this.state.filters.indexOf('tent');
      var newFilters = this.state.filters.splice(tent, 1);
      this.setState({
        filters: newFilters
      });
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
