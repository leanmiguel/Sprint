import React, { Component, useState} from 'react'

//placeholder for fetching projects
import projs from '../json/projects'

import Project from './Project'

const Home =()=> {
    
    const [projects, setTodos] = useState([...projs]);


    return (
        <>
        <h1>Your Projects</h1>
        {projects.map(proj => (<Project key={proj.title} data={proj}/>))}
        </>
    )
}

export default Home;
