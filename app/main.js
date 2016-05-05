import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './mainStore';
import routes from './routes';
import 'babel-polyfill';

render((
  <Provider store={store}>
    { routes }
  </Provider>
), document.getElementById('app'));
