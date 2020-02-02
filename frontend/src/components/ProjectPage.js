import React, { Component, useState} from 'react'

const ProjectPage =(props)=> {

    return(
        <div>
            {props.match.params.id}
            {props}
        </div>
    )
} 

export default ProjectPage;