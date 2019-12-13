import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Todos from './components/Todos'

import './App.css';


const App = () => {

  return (<Router>
    <Link to="/">Home</Link>
    <Link to="/todo">Todo</Link>

    <Switch>
          <Route path="/todo">
            <Todos />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>  
  </Router>)
}

export default App;
