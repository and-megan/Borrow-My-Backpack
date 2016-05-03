var React = require('react');
var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants');
var UserStore = new Store(AppDispatcher);
var _currentUser;
var _authErrors;
var _users = {};

UserStore.login = function (user) {
  _currentUser = user;
  _authErrors = null;
};

UserStore.logout = function () {
  _currentUser = null;
  _authErrors = null;
};

UserStore.find = function (id) {
  return _users[id];
};

UserStore.all = function () {
  return Object.keys(_users).map(function (id) {
    return _users[id];
  });
};

UserStore.setUser = function (user) {
  _users[user.id] = user;
};

UserStore.resetUsers = function (users) {
  _users = {};
  for (var i = 0; i < users.length; i++) {
    _users[users[i].id] = users[i];
  }
};

UserStore.removeUser = function (users) {
  delete _users[users.id];
};

UserStore.currentUser = function(){
  if (_currentUser) {
  	return $.extend({}, _currentUser);
  }
};

UserStore.errors = function(){
  if (_authErrors){
    return [].slice.call(_authErrors);
  }
};
UserStore.getUserById = function(user) {

};

UserStore.setErrors = function (errors) {
  _authErrors = errors;
};

UserStore.__onDispatch = function(payload){

  switch (payload.actionType) {
    case "LOGIN":
      UserStore.login(payload.user);
      break;
    case "LOGOUT":
      UserStore.logout();
      break;
    case "ERROR":
      UserStore.setErrors(payload.errors);
      break;
    case UserConstants.USERS_RECEIVED:
      this.resetUsers(payload.users);
      break;
    case UserConstants.USER_RECEIVED:
      this.setUser(payload.user);
      break;
    case UserConstants.USER_REMOVED:
      this.removeUser(payload.user);
      break;

  }
  this.__emitChange();
};

module.exports = UserStore;
