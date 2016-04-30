import { expect } from 'chai';
import { login } from './actions';

describe('Actions', () => {
  it('login action', () => {
    expect(login).to.deep.eq({
      type: 'LOGIN'
    })
  });
});
