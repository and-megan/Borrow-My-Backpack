var ServerActions = require('../actions/server_actions.js');
//request api utils
module.exports = {
  fetchRequests: function() {
    $.ajax({
      url: "api/requests",
      success: function (requests) {
        ServerActions.receiveAll(requests);
      }
    });
  },
  getRequest: function(id) {
    $.ajax({
      url:"api/requests/" + id.toString(),
      success: function(request) {
        ServerActions.receiveRequest(request);
      }
    });
  },
  createRequest: function(data) {
    $.ajax({
      type: "POST",
      url: "api/requests",
      data: { request: data },
      success: function(request) {
        ServerActions.receiveRequest(request);
      }
    });
  },
  updateRequest: function(data) {
    $.ajax({
      url: "api/requests/" + data.id,
      type: "PATCH",
      data: { request: {
        message: data.message,
        start_date: data.start_date,
        end_date: data.end_date
      }},
      success: function (request) {
        ServerActions.receiveRequest(request);
      }
    });
  },
  deleteRequest: function(id) {
    $.ajax({
      url: "api/requests/" + id.toString(),
      type: "DELETE",
      success: function(request) {
        ServerActions.removeRequest(request);
      }
    });
  } 
};
