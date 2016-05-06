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
    var potentialSG = SportingGoodStore.find(this.props.sportingGood.id);
    var sportingGood = potentialSG ? potentialSG : {};
    return {
      user_id: sportingGood.user_id,
      lat: sportingGood.lat,
      lng: sportingGood.lng,
      description: sportingGood.description,
      category: sportingGood.category,
      pic_url: sportingGood.pic_url,
      success: false
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
    if (this.state.success) {
      return (
        <div className="success-msg">Listing has been updated</div>
      );
    } else {
      return(
        <form onSubmit={this.handleSubmit}>
        <div className="sporting-edit-div">
        <div className="edit-heading">
          <h2 className="modal-title">Edit this listing</h2>
        </div>
          <div className="modal-field">
            <label>Type</label>
            <input className="form-input" list="sporting_goods" value={this.state.category} onChange={this.changeCategory}/>
              <datalist id="sporting_goods">
                <option value="backpack"></option>
                <option value="bicycle"></option>
                <option value="kayak"></option>
                <option value="snowboard"></option>
                <option value="surfboard"></option>
                <option value="tent"></option>
              </datalist>
          </div>

          <div className="modal-field">
            <br></br>
            <label>Description</label>
            <textarea className="form-textarea" value={this.state.description} onChange={this.changeDescription}></textarea>
          </div>
    
            <br></br>
          <div className="modal-field">
            <label>Picture url</label>
            <input type="url" className="form-input" value={this.state.pic_url} onChange={this.changeUrl}/>
          </div>
            <br></br>
          <div className="modal-field">
          <div className="update-button-container">
            <input className="form-input" type="submit" className="user-button" readOnly="true" value="Update Listing!"/>
          </div>
          </div>
        </div>
        </form>
      );
    }
  },
  handleSubmit: function(event) {
    event.preventDefault();
    var SportingGoodData = {
      category: this.state.category,
      description: this.state.description,
      lat: this.state.lat,
      lng: this.state.lng,
      pic_url: this.state.pic_url,
      id: parseInt(this.props.sportingGood.id)
    };
    SportingGoodClientActions.editSportingGood(SportingGoodData);
    this.setState({
      category: this.state.category,
      description: this.state.description,
      lat: this.state.lat,
      lng: this.state.lng,
      pic_url: this.state.pic_url,
      success: true
    });
    this.setState({
      success: false
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
