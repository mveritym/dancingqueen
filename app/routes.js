import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Login from './Login';

const Test = () => (
  <h2>TEST</h2>
)

export default (
  <Router history={browserHistory}>
    <Route path="/" component={ App }>
      <IndexRoute component={ Login } />
      <Route path="/test" component={ Test } />
    </Route>
  </Router>
)
