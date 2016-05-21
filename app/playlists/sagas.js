import { takeLatest } from 'redux-saga';

function* fetchPlaylists() {
}

export function* playlistPageLoad() {
  yield *takeLatest('FETCH_PLAYLISTS', fetchPlaylists);
}
