import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import TasksView from '../tasks/TasksView';
import PageNotFoundView from '../application/PageNotFoundView';
import routePaths from '../routePaths';
import CreateGroupView from '../tasks/CreateGroupView';
import './App.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route path={routePaths.TASKS} exact>
                    <TasksView />
                </Route>
                <Route path={routePaths.CREATE_GROUP} exact>
                    <CreateGroupView />
                </Route>
                <Route path='*'>
                    <PageNotFoundView />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
