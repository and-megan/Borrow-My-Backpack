var React = require('react');
var SportingGoodStore = require('../stores/sporting_good_store');
var SportingGoodClientActions = require('../actions/sporting_good_client_actions');
var SportingGoodApiUtil = require('../utils/sporting_good_api_utils');
var FilterActions = require('../actions/filter_actions');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;

var Map = React.createClass({
  componentDidMount: function(){
    var mapDOMNode = document.getElementById("map");
    var mapOptions = {
      center: {lat: 37.819633, lng: -122.368883},
      zoom: 11
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.sportingGoodChangeListener = SportingGoodStore.addListener(this.addSportingGoodMarkers);
  },
  componentWillUnmount: function() {
    this.sportingGoodChangeListener.remove();
  },
  addSportingGoodMarkers: function () {
    var allSportingGoods = [];

    allSportingGoods = SportingGoodStore.all();

    for (var i = 0; i < allSportingGoods.length; i++) {
      var myLatLng = new google.maps.LatLng(allSportingGoods[i].lat, allSportingGoods[i].lng);
      this.createSportingGoodMarker(myLatLng, allSportingGoods[i].id);
    }
  },
  createSportingGoodMarker: function (pos, SGid) {
    var marker = new google.maps.Marker({
      position: pos,
      id: SGid
    });
    google.maps.event.addListener(marker, 'click', function () {
      hashHistory.push('sporting_goods/' + marker.id);
    });
    marker.setMap(this.map);
  },
  render: function() {
    return (
      <div id="map" ref="map"></div>
    );
  }

});


module.exports = Map;
