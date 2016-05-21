import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Login from './Login';
import PlaylistPage from './playlists/PlaylistPage';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={ App }>
      <IndexRoute component={ Login } />
      <Route path="/playlists" component={ PlaylistPage } />
    </Route>
  </Router>
)
