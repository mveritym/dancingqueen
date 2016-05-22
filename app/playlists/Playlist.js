import React from 'react';

const Playlist = (props) => (
  <div>
    <img src={props.images[2].url} />
    <span>{props.name}</span>
  </div>
);

export default Playlist;
