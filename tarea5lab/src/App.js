import React from 'react';
import ShowTask from './components/ShowTask'
import TaskList from './components/TaskList'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import TaskDetail from './components/TaskDetail';


function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="menu">
          Menu: 
          <ul>
            <li>
              <Link to="/">Create Task</Link>
            </li>
            <li>
              <Link to="/tasks">Show Tasks</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <Switch>
            <Route exact path="/" component={TaskList}>
            </Route>
            <Route exact path="/tasks">
              < ShowTask/>
            </Route>
            <Route path="/tasks/:id" component={TaskDetail}>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
