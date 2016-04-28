var React = require('react');
var SportingGoodClientActions = require('../actions/sporting_good_client_actions');
//need to add in lat and lng...
module.exports = React.createClass({
  getInitialState: function() {
    return {
      description: ""
    };
  },
  changeType: function (e) {
    var newType = e.target.value;
    this.setState({
      type: newType
    });
  },
  changeLng: function (e) {
    var newLng = e.target.value;
    this.setState({
      lng: newLng
    });
  },
  changeLat: function (e) {
    var newLat = e.target.value;
    this.setState({
      lat: newLat
    });
  },
  changeUrl: function (e) {
    var newUrl = e.target.value;
    this.setState({
      pic_url: newUrl
    });
  },
  changeDescription: function (e) {
    var newDescription = e.target.value;
    this.setState({
      description: newDescription
    });
  },
  handleSubmit: function(event) {
    event.preventDefault();
    var SportingGoodData = {
      description: this.state.description,

    };
    SportingGoodClientActions.createSportingGood(SportingGoodData);
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>


        <input list="sporting_goods" value={this.state.type} onChange={this.changeType}>
          <datalist id="sporting_goods">
            <option value="backpack"></option>
            <option value="bicycle"></option>
            <option value="kayak"></option>
            <option value="skis"></option>
            <option value="snowboard"></option>
            <option value="surfboard"></option>
          </datalist>
        </input>

          <textarea value={this.state.description} onChange={this.changeDescription}>Description</textarea>

          <input type="number" step="0.000001" value={this.state.lat} onChange={this.changeLat}>Latitude</input>

          <input type="number" step="0.000001" value={this.state.lng} onChange={this.changeLng}>Longitude</input>

          <input type="url" value={this.state.pic_url} onChange={this.changeUrl}>Pic Url</input>

          <input type="submit" value="Create Post"></input>
        </form>
      </div>
    );
  }
});
