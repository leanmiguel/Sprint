const User = require('./Models/User');
const UserProject = require('./Models/UserProject');
const Project = require('./Models/Project');

async function getUser() {
  const projects = await User.query()
    .where('name', 'Big Game')
    .withGraphFetched('projects.[tasks,workSessions]');

  return projects[0];
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
module.exports = {
  getUser,
  addProject,
};
