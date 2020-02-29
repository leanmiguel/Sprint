import React, { useState } from "react";

<<<<<<< HEAD
//styled components

import { ProjectsContainer, Header } from "./Home.styles"
=======
import { ProjectsContainer } from "./Home.styles";
>>>>>>> 50bfaea63235bc4784322061d631f29011c25578

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
      </ProjectsContainer>
    </>
  );
};

export default Home;
