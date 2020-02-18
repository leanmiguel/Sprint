import React, { useState } from "react";

import { ProjectsContainer } from "./Home.styles";

//placeholder for fetching projects

import projs from "../../json/projects";

import Project from "./Project";

const Home = () => {
  const [projects, setTodos] = useState([...projs]);

  return (
    <>
      <h1>Your Projects</h1>
      <ProjectsContainer>
        {projects.map(proj => (
          <Project key={proj.title} data={proj} />
        ))}
      </ProjectsContainer>
    </>
  );
};

export default Home;
