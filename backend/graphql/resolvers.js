const { getUser, addProject } = require('../database/queries');

module.exports = {
  resolvers: {
    Query: {
      getUser,
    },
    Mutation: {
      addProject,
    },
  },
};
