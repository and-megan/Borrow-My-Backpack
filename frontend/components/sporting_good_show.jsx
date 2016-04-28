//FANCY LOADING IMAGES
var React = require('react');
var Link = require('react-router').Link;
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
//store
var SportingGoodStore = require('../stores/sporting_good_store');
//actions
var SportingGoodClientActions = require('../actions/sporting_good_client_actions');
//mixins
var CurrentUserState = require('../mixins/current_user_state');

var SportingGoodShow = React.createClass({
  mixins: [CurrentUserState],
  getInitialState: function() {
    return {
      sportingGood: {pic_url: "i'm blank", description: "none"}
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
  currentUserEdit: function () {
    if (this.state.currentUser !== this.state.sportingGood.user_id) {
      return;
    } else {
      return(
        <button onClick={this.editListing}>Edit Listing</button>
      );
    }
  },
  editListing: function () {
    var url = "/sporting_goods/" + this.props.sportingGood.id.toString() + "/edit";
    hashHistory.push(url);
  },
  deleteSportingGood: function () {
    var potentialSportingGood = SportingGoodStore.find(this.props.params.sportingGoodId);
    var sportingGood = potentialSportingGood ? potentialSportingGood : {};
    SportingGoodClientActions.deleteSportingGood(sportingGood);
  },
  render: function() {
    return (
      <div id="sporting-good-container">
        <ul>
          <li className="sporting-good-show-pic">
            <img src={this.state.sportingGood.pic_url} alt="sporting_good_item_show" />
          </li>
          <li className="sporting-good-show-pic-description">
            {this.state.sportingGood.description}
          </li>
          <li>
            {this.currentUserEdit()}
          </li>
        </ul>
    </div>
    );
  }

});

module.exports = SportingGoodShow;
