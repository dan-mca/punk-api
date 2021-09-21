import React, { useState, useEffect } from 'react'
import styles from './App.module.scss';
import Navbar from './components/Navbar';
import Main from './components/Main';
import FiltersList from './components/FiltersList';
import NotFound from './components/NotFound';

import library from './data/fa-library';

import { getPunkBeers } from './services/beers.service';

function App() {
  
  const [beers, setBeers] = useState([]);
  const [beersData, setBeersData] = useState([]);

  // get data from API via service
  const getServiceBeers = async () => {
    const apiBeers = await getPunkBeers();
    setBeersData(apiBeers);
    setBeers(apiBeers);
  }

  useEffect(() => {
    getServiceBeers();
  }, []);

  // filter beers based on text search input
  const getBeers = (searchText) => {
    const result = beersData.filter((beer) => beer.name.toLowerCase().includes(searchText));
    setBeers(result);
  }

  // filter beers based on filter selection
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

  
  const mainContent = beers && beers.length ? 
    <Main beers={beers}/> : 
    <NotFound header={"No results"} text={"Search again or try using the search filters"}/>

  return (
    <>
      <Navbar updateSearchText={getBeers}/>
      <FiltersList selectedFilter={getFilterdBeers} />
      {mainContent}
    </>
  );
}

export default App;
