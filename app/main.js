import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store, runMiddleware } from './mainStore';
import routes from './routes';
import 'babel-polyfill';
import styles from './styles/baseStyles.css';

runMiddleware();
render((
  <Provider store={store}>
    { routes }
  </Provider>
), document.getElementById('app'));
