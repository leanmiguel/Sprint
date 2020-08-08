import { useUser } from '../../../utils/auth/useUser';
import GraphQLClient from '../../../gql/client';

import { useState } from 'react';

const ADD_PROJECT_QUERY = `mutation ADD_PROJECT($id: String!, $name: String!, $description: String){
	addProject(userId:$id, name: $name, description: $description ){
    name
    description
  }
}
`;

const UserPage = ({ name, id, projects }) => {
  const { user, logout } = useUser();
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const addProject = async () => {
    if (user && projectName) {
      await GraphQLClient.request(ADD_PROJECT_QUERY, {
        id: user.id,
        name: projectName,
        description: projectDescription,
      });
    }
  };
  return (
    <>
      <h1>Current User:{name}</h1>
      <h3>Current Id: {id}</h3>
      {projects.map((project) => (
        <div style={{ border: 'solid 1px black', display: 'inline-block' }}>
          <h4>Project: {project.name}</h4>
          <p>Description: {project.description}</p>
          <div>Number of tasks: {project.tasks && project.tasks.length}</div>
          <div>Number of work sessions: {project.workSessions && project.workSessions.length}</div>
        </div>
      ))}
      <div style={{ marginTop: '20px' }}>
        <label>project name</label>
        <input value={projectName} onChange={(e) => setProjectName(e.target.value)}></input>
        <label>project description</label>
        <input
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        ></input>
        <button onClick={addProject} style={{ marginLeft: '20px', cursor: 'pointer' }}>
          Add Project
        </button>
      </div>
    </>
  );
};

export default UserPage;
