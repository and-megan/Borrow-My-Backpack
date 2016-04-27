var SportingGoodApiUtil = require('../utils/sporting_good_api_utils');
module.exports = {
  fetchPosts: function () {
    SportingGoodApiUtil.fetchSportingGoods();
  },
  getPost: function (id) {
    SportingGoodApiUtil.getSportingGood(id);
  },
  createPost: function (data) {
    SportingGoodApiUtil.createSportingGood(data);
  },
  editPost: function (data) {
    SportingGoodApiUtil.updateSportingGood(data);
  },
  deletePost: function (id) {
    SportingGoodApiUtil.deleteSportingGood(id);
  }
};
