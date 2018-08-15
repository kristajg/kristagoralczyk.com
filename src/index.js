import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from './App';
import Home from './containers/Home';
import NotFound from './components/NotFound';

const history = createHistory();
export default history;

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root'),
);
