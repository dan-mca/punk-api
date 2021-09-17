import React from 'react';
import styles from './Navbar.module.scss';
import SearchBox from '../SearchBox';

const Navbar = (props) => {
  const {updateSearchText} = props;

  return (
    <header>
      <h1>Punk Beer Catalogue</h1>
      <SearchBox updateSearchText={updateSearchText}/>
    </header>
    
  )
}

export default Navbar;
