const User = require('./Models/User');
const UserProject = require('./Models/UserProject');
const Project = require('./Models/Project');

async function getUser(_, args) {
  const user = await User.query()
    .findOne('uid', args.id)
    .withGraphFetched('projects.[tasks,workSessions]');

  return user;
}

async function addProject(_, args) {
  // add new project to database
  const project = await Project.query().insert({
    name: args.name,
    description: args.description,
  });

  // modify to join table to match new project
  await UserProject.query().insertGraph({
    user_id: args.userId,
    project_id: project.id,
  });

  return project;
}

async function addUser(_, args) {
  const user = User.query().insert({
    name: args.name,
    uid: args.id,
  });

  return user;
}
module.exports = {
  getUser,
  addProject,
  addUser,
};
