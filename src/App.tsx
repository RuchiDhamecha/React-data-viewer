import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginPage/LoginPage';
import Home from './pages/home/Home';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
