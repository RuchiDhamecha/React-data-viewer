import React from 'react';
import Table from '../../components/table/Table';
import styles from './Home.module.scss';
import Navbar from '../../template/Navbar/Navbar';

const Home = () => {
  return (
    <div>

    <div className={styles.home}>
      
      <h1>Home</h1>
      <Table />
    </div>
    </div>
  );
};

export default Home;
