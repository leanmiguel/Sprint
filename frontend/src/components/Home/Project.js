import React, { useState } from "react"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

//styled components

import { ProjectContainer, UsersContainer, UserIcon } from "./Project.styles"

const Project = props => {
  const [id, setId] = useState(props.data.id)
  const [title, setTitle] = useState(props.data.title)
  const [description, setDescription] = useState(props.data.description)
  const [users, setUsers] = useState([...props.data.users])

  return (
    <ProjectContainer>
      <Link to={`/projects/${id}`}>{title}</Link>
      <h3>{description}</h3>
      <h3>Next Meeting</h3>
      <UsersContainer>
        {users.map(user => (
          <UserIcon>{user.name.charAt(0).toUpperCase()}</UserIcon>
        ))}
      </UsersContainer>
    </ProjectContainer>
  )
}

export default Project
