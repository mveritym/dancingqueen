import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import actions from '../actions/constants';
import { login_success, login_failure } from '../actions/actions';
import api from '../api/api.js';

export function* login () {
  const loginSuccess = yield call(api.login);
  const action = loginSuccess ? login_success : login_failure;
  yield put(action);
}

export default function* () {
  yield* takeLatest(actions.DO_LOGIN, login);
}
