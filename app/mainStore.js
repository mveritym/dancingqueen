import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import mainReducer from './mainReducer';
import { playlistPageLoad } from './playlists/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = (() => {
  console.log('creating store');
  return createStore(
    mainReducer,
    applyMiddleware(sagaMiddleware));
})();

export const runMiddleware = () => {
  sagaMiddleware.run(playlistPageLoad);
};
