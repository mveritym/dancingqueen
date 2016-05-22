export const fetchPlaylists = (accessToken) => ({
  type: 'FETCH_PLAYLISTS',
  accessToken
});

export const playlistFetchSuccess = (playlists) => ({
  type: 'PLAYLIST_FETCH_SUCCESS',
  playlists
});
