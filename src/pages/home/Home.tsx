import React from 'react';
import Table from '../../components/table/Table';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Home</h1>
      <Table />
    </div>
  );
};

export default Home;
