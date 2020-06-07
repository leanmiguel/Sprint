const {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} = require("../postgres/queries")

module.exports = {
  resolvers: {
    Query: {
      users: getUsers,
    },
    Mutation: {
      addUser: addUser,
      updateUser: updateUser,
      deleteUser: deleteUser,
    },
  },
}
