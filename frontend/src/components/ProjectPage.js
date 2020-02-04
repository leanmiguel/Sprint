import React, { Component, useState} from 'react'

const ProjectPage =({match, location})=> {

    return(
        <>
        <div>
        <code>{JSON.stringify(match, null, 2)}</code>
        <br/>
        <code>{JSON.stringify(location, null, 2)}</code>
        </div>
        </>
    )
} 

export default ProjectPage;