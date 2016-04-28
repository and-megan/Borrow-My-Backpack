var React = require('react');
var Link = require('react-router').Link;
//store
var SportingGoodStore = require('../stores/sporting_good_store');
//actions
var SportingGoodClientActions = require('../actions/sporting_good_client_actions');

var SportingGoodShow = React.createClass({
  getInitialState: function() {
    var potentialSportingGood = SportingGoodStore.find(this.props.params.sportingGoodId);
    var sportingGood = potentialSportingGood ? potentialSportingGood : {};
    return {
      sportingGood: sportingGood
    };
  },
  componentDidMount: function() {
    this.sportingGoodListener = SportingGoodStore.addListener(this.handleChange);
    SportingGoodClientActions.getSportingGood(parseInt(this.props.params.sportingGoodId));
  },
  componentWillUnmount: function() {
    this.sportingGoodListener.remove();
  },
  handleChange: function () {
    var potentialSportingGood = SportingGoodStore.find(this.props.params.sportingGoodId);
    var sportingGood = potentialSportingGood ? potentialSportingGood : {};
    this.setState({
      sportingGood: sportingGood
    });
  },
  render: function() {
    var sportingGood = this.state.sportingGood;
    return (
      <div id="sporting-good-container">
      <h3>{sportingGood.user + "'s " + sportingGood.category}</h3>
      <ul>
        <li>{sportingGood.description}</li>
        <li>{sportingGood.pic_url}</li>
      </ul>
    </div>
    );
  }

});

module.exports = SportingGoodShow;
