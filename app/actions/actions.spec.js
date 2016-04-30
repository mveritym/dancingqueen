import { expect } from 'chai';
import { login, login_success, login_failure } from './actions';
import apiConstants from './constants';

describe('Actions', () => {
  it('returns correct actions', () => {
    expect(login).to.deep.eq({ type: apiConstants.DO_LOGIN });
    expect(login_success).to.deep.eq({ type: apiConstants.LOGIN_SUCCESS });
    expect(login_failure).to.deep.eq({ type: apiConstants.LOGIN_FAILURE });
  });
});
