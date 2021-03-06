var ServerActions = require('../actions/server_actions.js');
//sporting good api utils
module.exports = {
  fetchSportingGoods: function(filters) {
    $.ajax({
      url: "api/sporting_goods",
      data: {filters: filters},
      success: function (sportingGoods) {
        ServerActions.receiveAllSportingGoods(sportingGoods);
      }
    });
  },
  getSportingGood: function(id) {
    $.ajax({
      url:"api/sporting_goods/" + id.toString(),
      success: function(sportingGood) {
        ServerActions.receiveSportingGood(sportingGood);
      }
    });
  },
  createSportingGood: function(data) {
    $.ajax({
      type: "POST",
      url: "api/sporting_goods",
      data: { sporting_good: data },
      success: function(sportingGood) {
        ServerActions.receiveSportingGood(sportingGood);
      }
    });
  },
  updateSportingGood: function(data) {
    $.ajax({
      url: "api/sporting_goods/" + data.id,
      type: "PATCH",
      data: { sporting_good: {
        lat: data.lat,
        lng: data.lng,
        description: data.description,
        category: data.category,
        pic_url: data.pic_url
      }},
      success: function (sportingGood) {
        ServerActions.receiveSportingGood(sportingGood);
      }
    });
  },
  deleteSportingGood: function(object) {
    $.ajax({
      url: "api/sporting_goods/" + object.id.toString(),
      type: "DELETE",
      success: function(sportingGood) {
        ServerActions.removeSportingGood(sportingGood);
      }
    });
  }
};
