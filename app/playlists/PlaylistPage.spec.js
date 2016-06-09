import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import { PlaylistPage } from './PlaylistPage';
import { Playlist } from './Playlist';

describe('PlaylistPage', () => {

  const props = {
    dispatch: () => {},
    location: {
      query: {}
    },
    playlists: [{ collaborative: true }]
  }

  it.only('renders some playlists', () => {
    const playlistPage = shallow(<PlaylistPage {...props} />);
    expect(playlistPage.find('Playlist').length).to.eq(1);
  });
});
