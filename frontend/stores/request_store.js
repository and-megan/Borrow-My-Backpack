var React = require('react');
var AppDispatcher = require('../dispatcher/dispatcher');
var RequestConstants = require('../constants/request_constants');
var Store = require('flux/utils').Store;
var RequestStore = new Store(AppDispatcher);
var _requests = {};

RequestStore.find = function(id) {
  return _requests[id];
};

RequestStore.all = function() {
  return Object.keys(_requests).map(function(id) {
    return _requests[id];
  });
};

RequestStore.setRequest = function(request) {
  _requests[request.id] = request;
};

RequestStore.resetRequests = function(requests) {
  _requests = {};
  for (var i = 0; i < requests.length; i++) {
    _requests[requests[i].id] = requests[i];
  }
};

RequestStore.removeRequest = function(request) {
  delete _requests[request.id];
};

RequestStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case RequestConstants.REQUESTS_RECEIVED:
      this.resetRequests(payload.requests);
      break;
    case RequestConstants.REQUEST_RECEIVED:
      this.setRequest(payload.request);
      break;
    case RequestConstants.REQUEST_REMOVED:
      this.removeRequest(payload.request);
      break;
  }
  this.__emitChange();
}; 



module.exports = RequestStore;
