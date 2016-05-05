var React = require('react');
var SportingGoodClientActions = require('../actions/sporting_good_client_actions');
var hashHistory = require('react-router').hashHistory;

//sporting good form
module.exports = React.createClass({

  getInitialState: function() {
    return {
      category: "",
      description: "",
      address: "",
      lat: "",
      lng: "",
      pic_url: ""
    };
  },

  changeCategory: function (e) {
    var newCategory = e.target.value;
    this.setState({
      category: newCategory
    });
  },
  changeAddress: function (e) {
    var newAddress = e.target.value;
    this.setState({
      address: newAddress
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
    var latitude;
    var longitude;
    var addressInput = document.getElementById('address-input').value;
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({address: addressInput}, function (results, status) {

      if (status === google.maps.GeocoderStatus.OK) {
        latitude = results[0].geometry.location.lat();
        longitude = results[0].geometry.location.lng();

        var SportingGoodData = {
          category: this.state.category,
          description: this.state.description,
          lat: latitude,
          lng: longitude,
          pic_url: this.state.pic_url
        };
        SportingGoodClientActions.createSportingGood(SportingGoodData);
      }
    }.bind(this));

    this.props.onClick();
    hashHistory.push("/");
  },

  render: function() {

      return(
        <div id="sporting-good-form">
          <h2 className="modal-title">Create a new listing</h2>
          <br></br>
          <br></br>
          <form onSubmit={this.handleSubmit}>

          <label>Type</label>
          <input list="sporting_goods" value={this.state.category} onChange={this.changeCategory}/>
            <datalist id="sporting_goods">
              <option value="backpack"></option>
              <option value="bicycle"></option>
              <option value="kayak"></option>
              <option value="snowboard"></option>
              <option value="surfboard"></option>
              <option value="tent"></option>
            </datalist>
            <br></br>
            <br></br>
            <label>Description</label>
            <textarea value={this.state.description} onChange={this.changeDescription}></textarea>
            <br></br>
            <br></br>

            <label>Address</label>
            <textarea type="text" id="address-input" value={this.state.address} onChange={this.changeAddress}/>
            <br></br>
            <br></br>

            <label>Picture Url</label>
            <input type="url" value={this.state.pic_url} onChange={this.changeUrl}/>
            <br></br>
            <br></br>

            <button className="user-button" type="submit"  value="Create a listing">List it!</button>

          </form>
      </div>
    );
  }
});
