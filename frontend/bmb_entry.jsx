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

var App = React.createClass({
  mixins: [CurrentUserState],
  render: function () {
    return (
      <div>
        <h1>borrow my backpack</h1>
        <LoginForm />
        {this.props.children}
      </div>
    );
  }
});



var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={SportingGoodIndex}></IndexRoute>
      <Route path="sporting_goods" component={SportingGoodIndex} /> 
    </Route>
);


  document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router history={hashHistory} routes={routes}/>, document.getElementById("content"));
  });
