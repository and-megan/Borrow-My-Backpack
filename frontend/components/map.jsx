var React = require('react');
var SportingGoodStore = require('../stores/sporting_good_store');
var SportingGoodClientActions = require('../actions/sporting_good_client_actions');
var SportingGoodApiUtil = require('../utils/sporting_good_api_utils');

var Map = React.createClass({
  componentDidMount: function(){
    var mapDOMNode = document.getElementById("map");
    // EDITED VAR MAP DOMNODE FROM THE GOOGLE COPY PASTE TO BE ABLE TO GRAB THE ID=MAP IN RENDER FUNCTION
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.sportingGoodChangeListener = SportingGoodStore.addListener(this.addSportingGoodMarkers);
  },
  componentWillUnmount: function() {
    this.sportingGoodChangeListener.remove();
  },
  addSportingGoodMarkers: function () {

    var allSportingGoods = SportingGoodStore.all();

    for (var i = 0; i < allSportingGoods.length; i++) {
      var myLatLng = new google.maps.LatLng(allSportingGoods[i].lat, allSportingGoods[i].lng);
      var marker = new google.maps.Marker({
        position: myLatLng
      });
      marker.setMap(this.map);
    }
  },
  render: function() {
    debugger;
    return (
      <div id="map" ref="map"></div>
    );
  }

});


module.exports = Map;
