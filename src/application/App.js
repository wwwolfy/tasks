import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import TasksView from '../tasks/TasksView';
import PageNotFoundView from '../application/PageNotFoundView';
import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact>
                    <TasksView />
                </Route>
                <Route path='*'>
                    <PageNotFoundView />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
