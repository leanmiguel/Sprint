import { useQuery, gql, useMutation } from '@apollo/client';
import { useUser } from '../../../utils/auth/useUser';
import GraphQLClient from '../../../gql/client';
import { useState } from 'react';

const GET_USER_PROJECTS_QUERY = gql`
  query getUserProjects($id: String!) {
    getUser(id: $id) {
      projects {
        name
        description
        tasks {
          task
        }
        workSessions {
          name
        }
      }
    }
  }
`;

const ADD_PROJECT_QUERY = gql`
  mutation ADD_PROJECT($id: String!, $name: String!, $description: String) {
    addProject(userId: $id, name: $name, description: $description) {
      name
      description
    }
  }
`;

const UserPage = ({ name, id, projects }) => {
  const { user, logout } = useUser();
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const { loading, error, data } = useQuery(GET_USER_PROJECTS_QUERY, {
    variables: { id: user ? user.id : id },
  });

  console.log(data);
  const [addProject] = useMutation(ADD_PROJECT_QUERY);

  const handleAddProjectClick = () => {
    if (user && projectName) addProject({ variables: { id: user.id, name: projectName } });
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
        <button onClick={handleAddProjectClick} style={{ marginLeft: '20px', cursor: 'pointer' }}>
          Add Project
        </button>
      </div>
    </>
  );
};

export default UserPage;
