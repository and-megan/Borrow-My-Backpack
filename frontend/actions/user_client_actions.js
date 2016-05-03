var UserApiUtil = require('../utils/user_api_utils');
//user client actions
module.exports = {
  fetchUsers: function () {
    UserApiUtil.fetchUsers();
  },
  getUser: function (id) {
    UserApiUtil.getUser(id);
  },
  createUser: function (data) {
    UserApiUtil.createUser(data);
  },
  editUser: function (data) {
    UserApiUtil.updateUser(data);
  },
  deleteUser: function (id) {
    UserApiUtil.deleteUser(id);
  }
};
