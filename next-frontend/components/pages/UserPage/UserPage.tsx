const UserPage = ({ name, id, projects }) => {
  return (
    <>
      <h1>yeah</h1>
      <h1>Current User:{name}</h1>
      <h3>Current Id: {id}</h3>
      {projects.map((project) => (
        <div style={{ border: 'solid 1px black', display: 'inline-block' }}>
          <h4>Project: {project.name}</h4>
          <p>Description: {project.description}</p>
          <div>Number of tasks: {project.tasks.length}</div>
          <div>Number of work sessions: {project.workSessions.length}</div>
        </div>
      ))}
      <div style={{ marginTop: '20px', background: 'red', cursor: 'pointer' }}>Add Project</div>
    </>
  );
};

export default UserPage;
