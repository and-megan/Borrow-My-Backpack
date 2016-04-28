var React = require('react');
var History = require('react-router').History;
//actions
var SportingGoodClientActions = require('../actions/sporting_good_client_actions');
//store
var SportingGoodStore = require('../stores/sporting_good_store');
//components
var SportingGoodForm = require('./sporting_good_form');
var SportingGoodIndexItem = require('./sporting_good_index_item');


var SportingGoodIndex = React.createClass({
  getInitialState: function() {
    return {
      sportingGoods: []
    };
  },
  componentDidMount: function() {
    this.sportingGoodListener = SportingGoodStore.addListener(this.getsportingGoods);
    SportingGoodClientActions.fetchsportingGoods();
  },
  componentWillUnmount: function() {
    this.sportingGoodListener.remove();
  },
  getsportingGoods: function () {
    this.setState({
      sportingGoods: SportingGoodStore.all()
    });
  },
  render: function() {
    var SportingGoodIndexItemsTags = this.state.sportingGoods.map(function(sportingGood) {
      return(<SportingGoodIndexItem key={sportingGood.id} sportingGood={sportingGood} />);
    });
    return (
      <div className="sporting-good-index">
        <SportingGoodForm />
        <ul>
          {SportingGoodIndexItemsTags}
        </ul>
      </div>
    );
  }

});

module.exports = SportingGoodIndex;
