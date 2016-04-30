import React from 'react';
import { shallow } from 'enzyme';
import chai, { expect } from 'chai'
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())

import App from './App';

describe('App Component', () => {
  it('renders a header', () => {
    const app = shallow(<App />);
    expect(app.find('h1')).to.have.text('Indio');
  });
});
