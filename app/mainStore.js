import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import loginListener from './sagas/loginSaga';

const sagaMiddleware = createSagaMiddleware();

export default (
  createStore((state = [], action) => {
    return state;
  }, applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(loginListener);
