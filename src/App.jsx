import React, { useState, useEffect } from 'react'
import styles from './App.module.scss';
import Navbar from './components/Navbar';
import Main from './components/Main';
import beersData from  './data/beers';

import library from './data/fa-library';
import FiltersList from './components/FiltersList';

function App() {
  const [beers, setBeers] = useState([]);
  
  // filter beers based on search term and setBeers with the filtered array
  const getBeers = (searchText) => {
    const result = beersData.filter((beer) => beer.name.toLowerCase().includes(searchText));
    setBeers(result);
  }

  
  const getFilterdBeers = (filterBy) => {
    const filteredBeers = beersData.filter((beer) => {
      if (beer.first_brewed.slice(3,7) < 2010 && filterBy === "classic") { return beer}
      if (beer.abv > 6 && filterBy === "highABV") { return beer}
      if (beer.ph < 4 && filterBy === "highPH") { return beer}
    });
    setBeers(filteredBeers)
  }

  useEffect(() => {
    getBeers(beers);
  }, []);

  return (
    <>
      <Navbar updateSearchText={getBeers}/>
      <FiltersList filterClicked={getFilterdBeers}  />
      <Main beers={beers}/>
    </>
  );
}

export default App;
