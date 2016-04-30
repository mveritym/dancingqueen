import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './actions/actions';

class Login extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>Login</button>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return {
    onClick: () => { dispatch(login) }
  }
}

export default connect(null, matchDispatchToProps)(Login);
