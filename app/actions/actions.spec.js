import { expect } from 'chai';
import { login } from './actions';
import { DO_LOGIN } from './constants';

describe('Actions', () => {
  it('login action', () => {
    expect(login).to.deep.eq({
      type: DO_LOGIN
    })
  });
});
