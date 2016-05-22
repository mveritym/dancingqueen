import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { playlistFetchSuccess } from './actions';
import api from '../api/api';

export function* fetchPlaylists(action) {
  try {
    const playlists = yield call(api.getPlaylists, action.accessToken);
    yield put(playlistFetchSuccess(playlists));
  } catch (error) {
    console.log('Error:', error.message);
  }
}

export function* playlistPageLoad() {
  yield *takeLatest('FETCH_PLAYLISTS', fetchPlaylists);
}
