import React, { Component, useState } from "react"

//styled components

import { ProjectsContainer, Header } from "./Home.styles"

//placeholder for fetching projects

import projs from "../../json/projects"

import Project from "./Project"

const Home = () => {
  const [projects, setTodos] = useState([...projs])

  return (
    <>
      <Header>Your Projects</Header>
      <ProjectsContainer>
        {projects.map(proj => (
          <Project key={proj.title} data={proj} />
        ))}
      </ProjectsContainer>
    </>
  )
}

export default Home
