//React
var React = require('react');
var ReactDOM = require('react-dom');
//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
//Mixin
var CurrentUserState = require('./mixins/current_user_state');
//Components
var LoginForm = require('./components/login_form');
var SportingGoodIndex = require('./components/sporting_good_index');
var SportingGoodShow = require('./components/sporting_good_show');
var Landing = require('./components/landing');
var NavBar = require('./components/nav_bar');
//Store
var UserStore = require('./stores/user_store');

var requireSignedIn = function () {
  if (!UserStore.currentUser()) {
    hashHistory.push("login");
  }
};

var requireNotSignedIn = function () {
  if (UserStore.currentUser()) {
    hashHistory.push("/");
  }
};

var App = React.createClass({

  render: function () {
    return (
      <div>
        <NavBar />
        <h1>borrow my backpack</h1>
        {this.props.children}
      </div>
    );
  }
});



var routes = (
    <Route path="/" component={App}>
      <Route path="login" onEnter={requireNotSignedIn} component={LoginForm} />
      <Route component={Landing} onEnter={requireSignedIn}>
        <IndexRoute component={SportingGoodIndex} />
        <Route path="sporting_goods/:sportingGoodId" component={SportingGoodShow} />
      </Route>
    </Route>
);


  document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router history={hashHistory} routes={routes}/>, document.getElementById("content"));
  });
