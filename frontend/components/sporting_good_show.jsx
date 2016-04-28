var React = require('react');
var Link = require('react-router').Link;
//store
var SportingGoodStore = require('../stores/sporting_good_store');
//actions
var SportingGoodClientActions = require('../actions/sporting_good_client_actions');

var SportingGoodShow = React.createClass({
  getInitialState: function() {
    debugger;

    return {
      sportingGood: {pic_url: "i'm blank"}
    };
  },
  componentDidMount: function() {
    debugger;
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
  deleteSportingGood: function () {
    var potentialSportingGood = SportingGoodStore.find(this.props.params.sportingGoodId);
    var sportingGood = potentialSportingGood ? potentialSportingGood : {};
    SportingGoodClientActions.deleteSportingGood(sportingGood);
  },
  render: function() {
    debugger;
    return (
      <div id="sporting-good-container">
        <ul>
          <li className="sporting-good-show">

            <img src={this.state.sportingGood.pic_url} alt="sporting_good_item_show" />

          </li>
        </ul>
    </div>
    );
  }

});

module.exports = SportingGoodShow;
