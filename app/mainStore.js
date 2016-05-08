import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

export default (
  createStore((state = [], action) => {
    return state;
  }, applyMiddleware(sagaMiddleware))
)
