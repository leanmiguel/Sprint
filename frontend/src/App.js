import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Todos from "./components/Todos";
import Home from "./components/Home/Home";
import ProjectPage from "./components/ProjectPage";
import Login from "./components/Register-Login/Login";
import SignUp from "./components/Register-Login/SignUp";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/projects/:id" component={ProjectPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
