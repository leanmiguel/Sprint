import React, { useState } from "react";

import { ProjectContainer } from "./Home.styles";

import { useAuth0 } from "../../react-auth0-spa";
//placeholder for fetching projects

import projs from "../../json/projects";

import Project from "../Project";

const Home = () => {
  const [projects, setTodos] = useState([...projs]);

  const { loading, user } = useAuth0();
  return (
    <>
      <h1>Your Projects</h1>
      <ProjectContainer>
        {projects.map(proj => (
          <Project key={proj.title} data={proj} />
        ))}
      </ProjectContainer>
    </>
  );
};

export default Home;
