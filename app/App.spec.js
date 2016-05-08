import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import App from './App';
import Header from './Header';

describe('App Component', () => {
  it('renders a header', () => {
    const app = shallow(<App />);
    expect(app).to.contain(<Header />);
  });
});
