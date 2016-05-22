import { expect } from 'chai';
import { call, put } from 'redux-saga/effects';
import { fetchPlaylists } from './sagas';
import api from '../api/api';
import { playlistFetchSuccess } from './actions';

describe('playlist sagas', () => {
  it('fetches playlists', () => {
    const action = { accessToken: '123' };
    const saga = fetchPlaylists(action);

    const apiCallStep = saga.next().value;
    expect(apiCallStep).to.deep.eq(call(api.getPlaylists, action.accessToken));

    const playlists = ['playlist'];
    const successPutStep = saga.next(playlists).value;
    expect(successPutStep).to.deep.eq(put(playlistFetchSuccess(playlists)));
  });
});
