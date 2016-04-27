var React = require('react');
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;
//actions
var SportingGoodClientActions = require('../actions/sporting_good_client_actions');


var SportingGoodIndexItem = React.createClass({

  render: function() {
    var sportingGood = this.props.sportingGood;
    return (
      <div />
    );
  }

});

module.exports = SportingGoodIndexItem;
