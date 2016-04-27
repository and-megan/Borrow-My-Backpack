var React = require('react');
var AppDispatcher = require('../dispatcher/dispatcher');
var SportingGoodConstants = require('../constants/sporting_good_constants');
var Store = require('flux/utils').Store;
var SportingGoodStore = new Store(AppDispatcher);
var _sportingGoods = {};

SportingGoodStore.find = function(id) {
  return _sportingGoods[id];
};

SportingGoodStore.all = function() {
  return Object.keys(_sportingGoods).map(function(id) {
    return _sportingGoods[id];
  });
}; 

SportingGoodStore.setSportingGood = function(sportingGood) {
  _sportingGoods[sportingGood.id] = sportingGood;
};

SportingGoodStore.resetSportingGoods = function(sportingGoods) {
  _sportingGoods = {};
  for (var i = 0; i < sportingGoods.length; i++) {
    _sportingGoods[sportingGoods[i].id] = sportingGoods[i];
  }
};

SportingGoodStore.removeSportingGood = function(sportingGoods) {
  delete _sportingGoods[sportingGoods.id];
};

SportingGoodStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case SportingGoodConstants.SPORTINGGOODS_RECEIVED:
      this.resetSportingGoods(payload.sportingGoods);
      break;
    case SportingGoodConstants.SPORTINGGOOD_RECEIVED:
      this.setSportingGood(payload.sportingGood);
      break;
    case SportingGoodConstants.SPORTINGGOOD_REMOVED:
      this.removeSportingGood(payload.sportingGood);
      break;
  }
  this.__emitChange();
};



module.exports = SportingGoodStore;
