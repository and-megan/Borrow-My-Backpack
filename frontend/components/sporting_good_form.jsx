var React = require('react');
var SportingGoodClientActions = require('../actions/sporting_good_client_actions');
var hashHistory = require('react-router').hashHistory;
//need to add in lat and lng...
//sporting good form
module.exports = React.createClass({
  getInitialState: function() {
    return {
      showForm: false
    };
  },
  renderForm: function () {
    var form = !this.state.showForm;
    this.setState({
      showForm: form
    });
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
    if (this.state.showForm === false) {
      return(<h5>Click on any item to view details</h5>);
    }
    return(
      <form onSubmit={this.handleSubmit}>

      <label>Type</label>
      <input list="sporting_goods" value={this.state.category} onChange={this.changeCategory}/>
        <datalist id="sporting_goods">
          <option value="backpack"></option>
          <option value="bicycle"></option>
          <option value="kayak"></option>
          <option value="skis"></option>
          <option value="snowboard"></option>
          <option value="surfboard"></option>
        </datalist>
        <br></br>

        <label>Description</label>
        <textarea value={this.state.description} onChange={this.changeDescription}></textarea>
        <br></br>

        <label>Latitude</label>
        <input type="number" step="0.000001" value={this.state.lat} onChange={this.changeLat}/>
        <br></br>

        <label>Longitude</label>
        <input type="number" step="0.000001" value={this.state.lng} onChange={this.changeLng}/>
        <br></br>

        <label>Picture Url</label>
        <input type="url" value={this.state.pic_url} onChange={this.changeUrl}/>
        <br></br>

        <input type="submit" readOnly="true" value="Create a listing"/>
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
      pic_url: this.state.pic_url

    };
    SportingGoodClientActions.createSportingGood(SportingGoodData);
    this.setState({
      category: "",
      description: "",
      lat: "",
      lng: "",
      pic_url: ""
    });
    hashHistory.push("/");
  },
  toggleFormShow: function () {
    if (this.state.showForm === false) {
      return ("List a new item");
    } else {
      return ("Hide this form");
    }
  },
  render: function() {
    return (
      <div id="sporting-good-form">
        <button onClick={this.renderForm}>{this.toggleFormShow()}</button>
        {this.form()}
      </div>
    );
  }
});
