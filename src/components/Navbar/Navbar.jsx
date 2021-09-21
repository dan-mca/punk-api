import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import SearchBox from '../SearchBox';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = (props) => {
  const {updateSearchText, expanded} = props;


  return (
    <header>
      <h1>Punk Beer Catalogue</h1>
      <section className={styles.searchContainer}>
        <SearchBox updateSearchText={updateSearchText}/>
        <button className={styles.mobileFilter}><FontAwesomeIcon icon="filter" /></button>
      </section>
    </header>
    
  )
}

export default Navbar;
