var ServerActions = require('../actions/server_actions.js');

module.exports = {
  fetchSportingGoods: function() {
    $.ajax({
      url: "api/sporting_goods",
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
      data: { sportingGood: {
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
  deleteSportingGood: function(id) {
    $.ajax({
      url: "api/sporting_goods/" + id.toString(),
      type: "DELETE",
      success: function(sportingGood) {
        ServerActions.removeSportingGood(sportingGood);
      }
    });
  }
};
