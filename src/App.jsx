import React, { useState, useEffect } from 'react'
import styles from './App.module.scss';
import Navbar from './components/Navbar';
import Main from './components/Main';
import SubHeader from './components/SubHeader';
import beersData from  './data/beers';

import library from "./data/fa-library";

function App() {
  const [beers, setBeers] = useState([]);
  
  // filter beers based on search term and setBeers with the filtered array
  const fetchBeers = (searchText) => {
    const result = beersData.filter((beer) => beer.name.toLowerCase().includes(searchText));
    setBeers(result);
  }

  console.log(beers);

  useEffect(() => {
    fetchBeers(beers);
  }, []);


  return (
    <>
      <Navbar updateSearchText={fetchBeers}/>
      <SubHeader />
      <Main beers={beers}/>
    </>
  );
}

export default App;
