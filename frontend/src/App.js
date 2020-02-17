import React, { useState } from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Todos from "./components/Other/Todo"
import Home from "./components/Home/Home"
import ProjectPage from "./components/Project/ProjectPage"
import Login from "./components/Register-Login/Login"
import SignUp from "./components/Register-Login/SignUp"
import gql from "graphql-tag"
import { useQuery } from "@apollo/react-hooks"
import Meeting from "./components/Meeting/Meeting"

const GET_USERS = gql`
  {
    users {
      id
      name
    }
  }
`

const App = () => {
  const { loading, error, data } = useQuery(GET_USERS)

  if (loading) return "Loading..."
  if (error) return `Error! ${error.message}`

  console.log(data)

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/projects/:id' component={ProjectPage} />
        <Route exact path='/meeting/:id' component={Meeting} />
      </Switch>
    </Router>
  )
}

export default App
