import React from 'react';
import styles from './FiltersList.module.scss';

const FiltersList = () => {
  return (
    <div className={styles.filtersContainer}>
      <h3>Filter beers:</h3>
      <div className={styles.filters}>
        <button>Classic Range</button>
        <button>High Alocohol</button>
        <button>High Acidity</button></div>
    </div>
  )
}

export default FiltersList
