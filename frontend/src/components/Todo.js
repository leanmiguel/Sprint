import React, {useState}from 'react'

const Todo =(props)=> {
    
    const[title, setTitle] = useState(props.data.title);
    const[description, setDescription] = useState(props.data.description);

    return(
        <>
        <h2>
            {title}
        </h2>
        <h3>
            {description}
        </h3>
        </>
    )
} 

export default Todo;