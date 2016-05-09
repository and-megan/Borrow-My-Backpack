var React = require('react');
var SportingGoodStore = require('../stores/sporting_good_store');
var SportingGoodClientActions = require('../actions/sporting_good_client_actions');


var ClickFilter = React.createClass({
  getInitialState: function() {
    return {
      filters: [],
      'backpack': false,
      'bicycle': false,
      'kayak': false,
      'snowboard': false,
      'surfboard': false,
      'tent': false

    };
  },

  updateStore: function (filters) {
    SportingGoodClientActions.fetchSportingGoods(filters);
  },

  toggleFilterState: function (e) {
    if (this.state.filters.indexOf(e.target.value) === -1) {
      var newState = {};
      var newFilterState = this.state.filters.concat(e.target.value);
      newState[e.target.value] = true;
      newState['filters'] = newFilterState;
      this.setState(newState);
      this.updateStore(newFilterState);
    } else {

      var parameter = this.state.filters.indexOf(e.target.value);
      var newFilters = this.state.filters.splice(parameter, 1);

      var updatedState={};
      updatedState[e.target.value] = true;
      updatedState['filters'] = this.state.filters;
      this.setState(updatedState);
      this.updateStore(this.state.filters);
    }
  },

  showAll: function () {
    this.setState({
      filters: [],
      backpackButton: false,
      bicycleButton: false,
      kayakButton: false,
      snowboardButton: false,
      surfboardButton: false,
      tentButton: false
    });
    this.updateStore([]);
  },
  render: function() {

    return (
      <div className="click-filter-all">
        <h2 className="filter-header">Filter By Type</h2>
        <div className="click-filter-container">
          <div className="checkbox-label">
            <label htmlFor="checkboxBa" >Backpack</label>
            <input className="checkboxBa" type="checkbox" defaultChecked={this.state.backpackButton} onClick={this.toggleFilterState} value="backpack"/>
          </div>
          <br></br>
          <div className="checkbox-label">
            <label htmlFor="checkboxBi">Bicycle</label>
            <input className="checkboxBi" type="checkbox" defaultChecked={this.state.bicycleButton} onClick={this.toggleFilterState} value="bicycle"/>
          </div>
          <br></br>
          <div className="checkbox-label">
            <label htmlFor="checkboxKa">Kayak</label>
            <input className="checkboxKa" type="checkbox" defaultChecked={this.state.kayakButton} onClick={this.toggleFilterState} value="kayak"/>
          </div>
          <br></br>
          <div className="checkbox-label">
            <label htmlFor="checkboxSn">Snowboard</label>
            <input className="checkboxSn" type="checkbox" defaultChecked={this.state.snowboardButton} onClick={this.toggleFilterState} value="snowboard"/>
          </div>
          <br></br>
          <div className="checkbox-label">
            <label htmlFor="checkboxSu">Surfboard</label>
            <input className="checkboxSu" type="checkbox" defaultChecked={this.state.surfboardButton} onClick={this.toggleFilterState} value="surfboard"/>
          </div>
          <br></br>
          <div className="checkbox-label">
            <label htmlFor="checkboxTe">Tent</label>
            <input className="checkboxTe" type="checkbox" defaultChecked={this.state.tentButton} onClick={this.toggleFilterState} value="tent"/>
          </div>
        </div>

      </div>
    );
  }

});

module.exports = ClickFilter;
// <button className={this.state.bicycleButton} onClick={this.toggleBicycle}>Bicycles</button>
// <br></br>
// <button className={this.state.kayakButton} onClick={this.toggleKayak}>Kayaks</button>
// <br></br>
// <button className={this.state.snowboardButton} onClick={this.toggleSnowboard}>Snowboards</button>
// <br></br>
// <button className={this.state.surfboardButton} onClick={this.toggleSurfboard}>Surfboard</button>
// <br></br>
// <button className={this.state.tentButton} onClick={this.toggleTent}>Tent</button>
