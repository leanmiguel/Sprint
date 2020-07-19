const {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
  getProjects,
} = require("../postgres/queries")

module.exports = {
  resolvers: {
    Query: {
      getUsers: getUsers,
      getProjects: getProjects,
    },
    Mutation: {
      addUser: addUser,
      updateUser: updateUser,
      deleteUser: deleteUser,
    },
  },
}
