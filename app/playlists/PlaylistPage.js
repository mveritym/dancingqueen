import React from 'react';
import { connect } from 'react-redux';
import { fetchPlaylists } from './actions';

export class PlaylistPage extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchPlaylists(this.props.location.query.access_token));
  };

  render() {
    return (
      <div>
        <h1>Playlist List</h1>
      </div>
    )
  };
};

function mapStateToProps(state) {
  return { playlists: state.playlists };
}

export default connect(mapStateToProps)(PlaylistPage);
