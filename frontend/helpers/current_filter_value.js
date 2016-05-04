//what sporting good index is currently showing/filtering
var SportingGoodStore = require('../stores/sporting_good_store');
var SportingGoodClientActions = require('../actions/sporting_good_client_actions');

var filters = [];

module.exports = {
  updateFilters: function(category){
    var index = filters.indexOf(category);
    if(index === -1){
      filters.push(tagId);
    }else {
      filters.splice(index, 1);
    }
    this.updateStore();
  },
  updateStore: function(){
    SportingGoodClientActions.fetchSportingGoods(filters);
  }
};
