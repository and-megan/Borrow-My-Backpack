var SportingGoodApiUtil = require('../utils/sporting_good_api_utils');
//sporting good client actions
module.exports = {
  fetchSportingGoods: function (filters) {
    SportingGoodApiUtil.fetchSportingGoods(filters);
  },
  getSportingGood: function (id) {
    SportingGoodApiUtil.getSportingGood(id);
  },
  createSportingGood: function (data) {
    SportingGoodApiUtil.createSportingGood(data);
  },
  editSportingGood: function (data) {
    SportingGoodApiUtil.updateSportingGood(data);
  },
  deleteSportingGood: function (id) {
    SportingGoodApiUtil.deleteSportingGood(id);
  }
};
