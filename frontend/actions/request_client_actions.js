var RequestApiUtil = require('../utils/request_api_utils');
//request client actions
module.exports = {
  fetchRequests: function () {
    RequestApiUtil.fetchRequests();
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
  }
};
