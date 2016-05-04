var AppDispatcher = require('../dispatcher/dispatcher.js');
var SportingGoodConstants = require('../constants/sporting_good_constants');
var RequestConstants = require('../constants/request_constants');
var UserConstants = require('../constants/user_constants');
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
  receiveAllRequests: function(requests) {

    AppDispatcher.dispatch({
      actionType: RequestConstants.REQUESTS_RECEIVED,
      requests: requests
    });
  },
  receiveRequest: function(request) {

    AppDispatcher.dispatch({
      actionType: RequestConstants.REQUEST_RECEIVED,
      request: request
    });
  },
  receiveRequestError: function (error) {
    AppDispatcher.dispatch({
      actionType: RequestConstants.REQUEST_ERROR,
      error: error
    });
  },
  removeRequest: function(request) {
    AppDispatcher.dispatch({
      actionType: RequestConstants.REQUEST_REMOVED,
      request: request
    });
  },
  receiveUser: function (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    });
  },
  receiveUsers: function (users) {
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    });
  }
};
