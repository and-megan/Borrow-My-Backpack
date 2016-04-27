var AppDispatcher = require('../dispatcher/dispatcher.js');
var SportingGoodConstants = require('../constants/sporting_good_constants');
module.exports = {
  //SPORTING GOOD ACTIONS
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
  }
};
