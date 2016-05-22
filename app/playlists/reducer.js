export default (state = [], action) => {
  switch (action.type) {
    case 'PLAYLIST_FETCH_SUCCESS':
      return action.playlists.items;
    default:
      return state;
  }
};
