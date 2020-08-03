const { getUser } = require('../database/queries');

module.exports = {
  resolvers: {
    Query: {
      getUser,
    },
  },
};
