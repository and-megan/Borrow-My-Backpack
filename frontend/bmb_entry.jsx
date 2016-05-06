//React
var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require("react-modal");
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
var SportingGoodEdit = require('./components/sporting_good_edit');
var Landing = require('./components/landing');
var NavBar = require('./components/nav_bar');
var RequestInbox = require('./components/request_inbox');
var SentRequestInbox = require('./components/sent_request_inbox');
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
  getInitialState: function(){
    return({ modalOpen: false });
  },
  componentDidMount: function() {
    this.loginListener = UserStore.addListener(this.toggleModal);
  },
  componentWillUnmount: function() {
    this.loginListener.remove();
  },
  toggleModal: function () {
    if (this.state.currentUser) {
      this.setState({
        modalOpen: false
      });
    } else {
      this.setState({
        modalOpen: true
      });
    }
  },
  closeModal: function(){
    this.setState({ modalOpen: false });
  },
  openModal: function(){
    this.setState({ modalOpen: true });
  },
  modalContent: function(){
    return(

      <Modal
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}>
        <LoginForm />

      </Modal>
    );
  },
  displayBackground: function () {
    if (!UserStore.currentUser()) {
      $('body').addClass('app-background');
    } else {
      $('body').removeClass('app-background');
    }
  },
  render: function () {
    if (this.props.location.pathname === '/login') {
      this.displayBackground();
    }
    return(
      <div id="app-container">
        <NavBar />
        {this.modalContent}
        {this.props.children}
      </div>
    );
  }
});



var routes = (
    <Route path="/" component={App}>
      <Route path="login" onEnter={requireNotSignedIn} component={LoginForm} />
      <Route component={Landing} >
        <IndexRoute component={SportingGoodIndex} />
        <Route path="sporting_goods/received_requests" component={RequestInbox} />
        <Route path="sporting_goods/sent_requests" component={SentRequestInbox} />
        <Route path="sporting_goods/:sportingGoodId" component={SportingGoodShow} />
        <Route path="sporting_goods/:sportingGoodId/edit" component={SportingGoodEdit} />
      </Route>
    </Route>
);


  document.addEventListener("DOMContentLoaded", function () {
  Modal.setAppElement(document.body);
  ReactDOM.render(<Router history={hashHistory} routes={routes}/>, document.getElementById("content"));
  });
