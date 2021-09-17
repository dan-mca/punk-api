import React from 'react'
import styles from './App.module.scss';
import Navbar from './components/Navbar';
import Main from './components/Main';
import SubHeader from './components/SubHeader';

import library from "./data/fa-library";



function App() {
  return (
    <>
      <Navbar />
      <SubHeader />
      <Main />
    </>
  );
}

export default App;
