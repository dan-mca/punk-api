import React from 'react';
import styles from './SearchBox.module.scss';

const SearchBox = (props) => {
  const { updateSearchText } = props;

  return (
    <div className={styles.searchContainer}>
      <input type="text" placeholder="Search beers" onInput={(e) => updateSearchText(e.target.value)} />
      <button>Search</button>
    </div>
  )
}

export default SearchBox;
