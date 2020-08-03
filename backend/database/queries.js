const User = require("./Models/User");

async function getUser() {
  const projects = await User.query()
    .where("name", "Big Game")
    .withGraphFetched("projects.[tasks,workSessions]");

  return projects[0];
}

module.exports = {
  getUser,
};
