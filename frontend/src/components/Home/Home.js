import React, { Component, useState} from 'react'

//styled components

import { ProjectContainer } from './Home.styles';

//placeholder for fetching projects

import projs from '../../json/projects'

import Project from '../Project'

const Home =()=> {
    
    
    const [projects, setTodos] = useState([...projs]);

    return (
        <>
            <h1>Your Projects</h1>
            <ProjectContainer>
            {projects.map(proj => (<Project key={proj.title} data={proj}/>))}
            </ProjectContainer>
        </>
    )
}

export default Home;
