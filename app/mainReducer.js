import { combineReducers } from 'redux';
import playlistsReducer from './playlists/reducer';

export default combineReducers({
  playlists: playlistsReducer
});
