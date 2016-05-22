import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists } from './actions';
import Playlist from './Playlist';
import styles from './playlistPage.css'

export class PlaylistPage extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchPlaylists(this.props.location.query.access_token));
  };

  render() {
    return (
      <div className={styles.playlistPage}>
        {
          this.props.playlists
            .filter(playlist => playlist.collaborative)
            .map(playlist => (
              <Playlist {...playlist} />
            ))
        }
      </div>
    )
  };
};

function mapStateToProps(state) {
  return { playlists: state.playlists };
}

export default connect(mapStateToProps)(PlaylistPage);
