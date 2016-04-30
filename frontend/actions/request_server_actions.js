var AppDispatcher = require('../dispatcher/dispatcher.js');
var RequestConstants = require('../constants/request_constants');
//REQUEST SERVER ACTIONS

module.exports = {
  receiveAllRequests: function(request) {
    AppDispatcher.dispatch({
      actionType: RequestConstants.REQUESTS_RECEIVED,
      request: request
    });
  },
  receiveRequest: function(request) {
    AppDispatcher.dispatch({
      actionType: RequestConstants.REQUEST_RECEIVED,
      request: request
    });
  },
  removeRequest: function(request) {
    AppDispatcher.dispatch({
      actionType: RequestConstants.REQUEST_REMOVED,
      request: request
    });
  }
};
