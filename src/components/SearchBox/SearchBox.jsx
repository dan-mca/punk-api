import React from 'react';
import styles from './SearchBox.module.scss';

const SearchBox = () => {
  return (
    <div className={styles.searchContainer}>
      <input type="text" placeholder="Search beers" />
      <button>Search</button>
    </div>
  )
}

export default SearchBox;
