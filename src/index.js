import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import App from './App';
import Home from './containers/Home';
import NotFound from './components/NotFound';

import createHistory from 'history/createBrowserHistory';
export let history = createHistory();

ReactDOM.render(
  <Router>
    <App>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route component={NotFound} />
    </Switch>
    </App>
  </Router>,
  document.getElementById('root')
);
