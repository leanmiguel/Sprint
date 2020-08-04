const { getUser, addProject, addUser } = require('../database/queries');

module.exports = {
  resolvers: {
    Query: {
      getUser,
    },
    Mutation: {
      addProject,
      addUser,
    },
  },
};
