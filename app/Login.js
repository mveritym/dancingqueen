import React from 'react';
import styles from './styles/Login.css';

const Login = () => (
  <div className={styles.container}>
    <div>Welcome to Indio! Log in to pick a playlist.</div>
    <a className={styles.link} href="/login">
      <div className={styles.text}>Login</div>
    </a>
  </div>
);

export default Login;
