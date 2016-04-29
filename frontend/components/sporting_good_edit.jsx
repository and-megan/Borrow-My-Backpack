var React = require('react');
var hashHistory = require('react-router').hashHistory;
//actions
var SportingGoodClientActions = require('../actions/sporting_good_client_actions');
//store
var SportingGoodStore = require('../stores/sporting_good_store');
//need to add in lat and lng...
//sporting good form
module.exports = React.createClass({

  getInitialState: function() {
    var potentialSG = SportingGoodStore.find(this.props.params.sportingGoodId);
    var sportingGood = potentialSG ? potentialSG : {};
    return {
      user_id: sportingGood.user_id,
      lat: sportingGood.lat,
      lng: sportingGood.lng,
      description: sportingGood.description,
      category: sportingGood.category,
      pic_url: sportingGood.pic_url
    };
  },

  changeCategory: function (e) {
    var newCategory = e.target.value;
    this.setState({
      category: newCategory
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

  form: function () {
    return(
      <form onSubmit={this.handleSubmit}>

      <input list="sporting_goods" value={this.state.category} onChange={this.changeCategory}/>
        <datalist id="sporting_goods">
          <option value="backpack"></option>
          <option value="bicycle"></option>
          <option value="kayak"></option>
          <option value="skis"></option>
          <option value="snowboard"></option>
          <option value="surfboard"></option>
        </datalist>


        <textarea value={this.state.description} onChange={this.changeDescription}></textarea>

        <label>Latitude</label>
        <input type="number" step="0.000001" value={this.state.lat} onChange={this.changeLat}/>

        <label>Longitude</label>
        <input type="number" step="0.000001" value={this.state.lng} onChange={this.changeLng}/>

        <input type="url" value={this.state.pic_url} onChange={this.changeUrl}/>

        <input type="submit" readOnly="true" value="Update Listing"/>
      </form>
    );
  },
  handleSubmit: function(event) {
    event.preventDefault();
    var SportingGoodData = {
      category: this.state.category,
      description: this.state.description,
      lat: this.state.lat,
      lng: this.state.lng,
      pic_url: this.state.pic_url,
      id: parseInt(this.props.params.sportingGoodId)
    };
    SportingGoodClientActions.editSportingGood(SportingGoodData);
    this.setState({
      category: this.state.category,
      description: this.state.description,
      lat: this.state.lat,
      lng: this.state.lng,
      pic_url: this.state.pic_url
    });
    hashHistory.push("/");
  },

  render: function() {
    return (
      <div id="sporting-good-edit">
        {this.form()}
      </div>
    );
  }
});
