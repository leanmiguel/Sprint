import React, {useState}from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
  

const Project =(props)=> {
    
    const[id, setId] = useState(props.data.id);
    const[title, setTitle] = useState(props.data.title);
    const[description, setDescription] = useState(props.data.description);
    const[users, setUsers] = useState([...props.data.users])

    return(
        <div style={{display: 'flex', flexDirection:'column'}}>
        <Link to={`/projects/${id}`}>
            {title}
        </Link>
        <h3>
            {description}
        </h3>
        {users.map(user=><h4>{user.name}</h4>)}
        </div>
    )
} 

export default Project;