import React, { useState } from "react";

//styled components

import { ProjectsContainer, Header ,AddContainer} from "./Home.styles"

//placeholder for fetching projects

import projs from "../../json/projects";

import Project from "./Project";

const Home = () => {
  const [projects, setTodos] = useState([...projs]);

  return (
    <>
      <Header>Your Projects</Header>
      <ProjectsContainer>
        {projects.map(proj => (
          <Project key={proj.title} data={proj} />
        ))}
      <AddContainer>hi</AddContainer>
      </ProjectsContainer>
    </>
  );
};

export default Home;
