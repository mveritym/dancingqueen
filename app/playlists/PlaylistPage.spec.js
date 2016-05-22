import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import {PlaylistPage} from './PlaylistPage';

describe('PlaylistPage', () => {

  const props = {
    dispatch: () => {},
    location: {
      query: {}
    }
  }

  it('renders a header', () => {
    const playlistPage = shallow(<PlaylistPage {...props} />);
    expect(playlistPage).to.contain(<h1>Playlist List</h1>);
  });
});
