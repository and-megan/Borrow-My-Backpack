var AppDispatcher = require('../dispatcher/dispatcher.js');
var SportingGoodConstants = require('../constants/sporting_good_constants');
var RequestConstants = require('../constants/request_constants');
module.exports = {
  //SERVER ACTIONS

  receiveAllSportingGoods: function(sportingGoods) {
    AppDispatcher.dispatch({
      actionType: SportingGoodConstants.SPORTINGGOODS_RECEIVED,
      sportingGoods: sportingGoods
    });
  },
  receiveSportingGood: function(sportingGood) {
    AppDispatcher.dispatch({
      actionType: SportingGoodConstants.SPORTINGGOOD_RECEIVED,
      sportingGood: sportingGood
    });
  },
  removeSportingGood: function(sportingGood) {
    AppDispatcher.dispatch({
      actionType: SportingGoodConstants.SPORTINGGOOD_REMOVED,
      sportingGood: sportingGood
    });
  },
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
