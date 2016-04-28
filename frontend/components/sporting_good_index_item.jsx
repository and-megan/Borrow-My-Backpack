var React = require('react');
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;
//actions
var SportingGoodClientActions = require('../actions/sporting_good_client_actions');


var SportingGoodIndexItem = React.createClass({
  goToShowPage: function () {
    hashHistory.push("sporting_goods/" + this.props.sportingGood.id);
  },
  render: function() {

    return (
      <li className="sporting-good-index-item">
        <img onClick={this.goToShowPage} alt="sporting_good_pic" src={this.props.sportingGood.pic_url} />
      </li>
    );

  }

});

module.exports = SportingGoodIndexItem;
