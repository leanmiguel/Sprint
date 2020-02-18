import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Todos from "./components/Other/Todo";
import Home from "./components/Home/Home";
import ProjectPage from "./components/Project/ProjectPage";
import Login from "./components/Register-Login/Login";
import SignUp from "./components/Register-Login/SignUp";
import gql from "graphql-tag";

import Meeting from "./components/Meeting/Meeting";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/projects/:id" component={ProjectPage} />
        <Route exact path="/meeting/:id" component={Meeting} />
      </Switch>
    </Router>
  );
};

export default App;
