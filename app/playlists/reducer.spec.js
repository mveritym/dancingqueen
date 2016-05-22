import playlistReducer from './reducer';
import chai, { expect } from 'chai'

describe('playlist reducer', () => {
  it('returns a list of playlists', () => {
    const playlists = { items: ['playlist 1', 'playlist 2'] };
    const action = {
      type: 'PLAYLIST_FETCH_SUCCESS',
      playlists
    };
    expect(playlistReducer(undefined, action)).to.eq(playlists.items);
  });
});
