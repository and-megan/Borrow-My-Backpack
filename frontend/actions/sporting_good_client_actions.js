var SportingGoodApiUtil = require('../utils/sporting_good_api_utils');
module.exports = {
  fetchSportingGoods: function () {
    SportingGoodApiUtil.fetchSportingGoods();
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
