import React, { useState, useEffect } from 'react'
import styles from './App.module.scss';
import Navbar from './components/Navbar';
import Main from './components/Main';
import FiltersList from './components/FiltersList';

import library from './data/fa-library';

import { fetchPunkBeers } from './services/beers.service';

function App() {
  
  const [beers, setBeers] = useState([]);
  const [beersData, setBeersData] = useState([]);

  const getServiceBeers = async () => {
    const apiBeers = await fetchPunkBeers();
    setBeersData(apiBeers);
    setBeers(apiBeers);
  }

  useEffect(() => {
    console.log("hello");
    getServiceBeers();
  }, []);

  const getBeers = (searchText) => {
    const result = beersData.filter((beer) => beer.name.toLowerCase().includes(searchText));
    setBeers(result);
  }

  const getFilterdBeers = (filterBy) => {
    const filteredBeers = beersData.filter((beer) => {
      if (beer.first_brewed.slice(3,7) < 2010 && filterBy === "Classic Range"
        || (beer.abv > 6 && filterBy === "High ABV")
        || (beer.ph < 4 && filterBy === "High PH")
      ) { 
        return beer
      } else if (filterBy === "Clear Filters") {
        return beers
      }

    });
    setBeers(filteredBeers)
  }

  return (
    <>
      <Navbar updateSearchText={getBeers}/>
      <FiltersList selectedFilter={getFilterdBeers} />
      <Main beers={beers}/>
    </>
  );
}

export default App;
