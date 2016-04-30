import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import App from './App';
import Login from './Login';

render((
  
  <Router history={browserHistory}>
    <Route path="/" component={ App }>
      <IndexRoute component={ Login } />
    </Route>
  </Router>
), document.getElementById('app'))
