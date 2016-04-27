var React = require('react');
var AppDispatcher = ('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var UserStore = new Store(AppDispatcher);
var _currentUser;
var _authErrors;

UserStore.login = function (user) {
  _currentUser = user;
  _authErrors = null;
};

UserStore.logout = function () {
  _currentUser = null;
  _authErrors = null;
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
  }
  UserStore.__emitChange();
};

module.exports = UserStore;
