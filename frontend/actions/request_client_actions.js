var RequestApiUtil = require('../utils/request_api_utils');
//request client actions
module.exports = {
  fetchSentRequests: function () {
    RequestApiUtil.fetchSentRequests();
  },
  fetchReceivedRequests: function () {
    RequestApiUtil.fetchReceivedRequests();
  },
  getRequest: function (id) {
    RequestApiUtil.getRequest(id);
  },
  createRequest: function (data) {
    RequestApiUtil.createRequest(data);
  },
  editRequest: function (data) {
    RequestApiUtil.updateRequest(data);
  },
  deleteRequest: function (id) {
    RequestApiUtil.deleteRequest(id);
  },
  getRequestsById: function (id) {
    RequestApiUtil.fetchRequestsById(id);
  }
};
