import React, {useState}from 'react'

const Project =(props)=> {
    
    const[title, setTitle] = useState(props.data.title);
    const[description, setDescription] = useState(props.data.description);
    const[users, setUsers] = useState([...props.data.users])

    return(
        <>
        <h2>
            {title}
        </h2>
        <h3>
            {description}
        </h3>
        {users.map(user=><h4>{user.name}</h4>)}
        </>
    )
} 

export default Project;