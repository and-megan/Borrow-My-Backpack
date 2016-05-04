var ServerActions = require('../actions/server_actions.js');
//request api utils
module.exports = {
  fetchSentRequests: function() {
    $.ajax({
      url: "api/requests",
      success: function (requests) {
        ServerActions.receiveAllRequests(requests.sent_requests);
      }
    });
  },
  fetchReceivedRequests: function() {

    $.ajax({
      url: "api/requests",
      success: function (requests) {
        ServerActions.receiveAllRequests(requests.received_requests);
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
      },
      error: function (error) {
        ServerActions.receiveRequestError(error);
      }
    });
  },
  updateRequest: function(data) {
    $.ajax({
      url: "api/requests/" + data.id,
      type: "PATCH",
      data: { request: {
        status_response: data.requestApproval,
        responded: true
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
