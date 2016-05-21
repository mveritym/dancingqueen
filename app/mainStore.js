import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { playlistPageLoad } from './playlists/sagas';

const sagaMiddleware = createSagaMiddleware();

export default (
  createStore((state = {} , action) => {
    return state;
  }, applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(playlistPageLoad);
