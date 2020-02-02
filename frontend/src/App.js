import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Todos from './components/Todos'
import Home from './components/Home/Home'
import ProjectPage from './components/ProjectPage'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="project/:id"  component={ProjectPage} />
      </Switch>  
    </Router>
  )
}

export default App;
