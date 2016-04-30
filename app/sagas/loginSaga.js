import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { DO_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/constants';
import api from '../api/api.js';

export function* login () {
  const loginSuccess = yield call(api.login);
  const action = loginSuccess ? LOGIN_SUCCESS : LOGIN_FAILURE;
  yield put(action);
}

export default function* () {
  yield *takeLatest(DO_LOGIN, login);
}
