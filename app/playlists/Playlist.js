import React from 'react';
import styles from './playlist.css';

const Playlist = (props) => (
  <div className={styles.playlist}>
    <img src={props.images[2].url} className={styles.image} />
    <span className={styles.title}>{props.name}</span>
  </div>
);

export default Playlist;
