import React from 'react'
import styles from './App.module.scss';
import Navbar from './components/Navbar';
import Main from './components/Main';

import beers from './data/beers.js';

function App() {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

export default App;
