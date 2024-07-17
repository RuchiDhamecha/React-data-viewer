import React from 'react';
import Login from '../../components/login/Login';
import styles from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <h1>Login</h1>
      <Login />
    </div>
  );
};

export default LoginPage;
