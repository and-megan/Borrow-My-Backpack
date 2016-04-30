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
      sportingGood: {pic_url: "i'm blank", description: "none",
      user_id: ""}
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
    if (this.state.currentUser.id !== this.state.sportingGood.user_id) {
      return;
    } else {
      return(
        <ul>
          <li>
            <button className="user-button" onClick={this.editListing}>Edit Listing</button>
          </li>
          <li>
            <button className="user-button" onClick={this.deleteSportingGood}>Delete Listing</button>
          </li>
        </ul>
      );
    }
  },

  editListing: function () {
    var url = "/sporting_goods/" + this.state.sportingGood.id.toString() + "/edit";
    hashHistory.push(url);
  },
  deleteSportingGood: function () {
    var potentialSportingGood = SportingGoodStore.find(this.props.params.sportingGoodId);
    var sportingGood = potentialSportingGood ? potentialSportingGood : {};
    SportingGoodClientActions.deleteSportingGood(sportingGood);
    hashHistory.push("/");
  },
  render: function() {
    return (
      <div id="sporting-good-container">
        <ul className="sporting-good-container-ul">
          <ul className ="sporting-good-row-1">
            <li>
              <img src={this.state.sportingGood.pic_url} className="sporting-good-show-pic" alt="sporting_good_item_show" />
            </li>
            <li className="sporting-good-show-pic-description">
              {this.state.sportingGood.description}
            </li>
          </ul>
          {this.currentUserEdit()}

        </ul>
        <Link to="/">View all listings</Link>
    </div>
    );
  }

});

module.exports = SportingGoodShow;
