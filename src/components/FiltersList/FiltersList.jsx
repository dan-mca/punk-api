import React from 'react';
import styles from './FiltersList.module.scss';
import FilterItem from '../FilterItem';

const FiltersList = (props) => {
  const { filterClicked } = props;

  return (
    <section className={styles.subHeader}>
      <div className={styles.filtersContainer}>
        <h3>Filter beers:</h3>
        <div className={styles.filters}>
          <FilterItem filterName="Classic Range" buttonValue={"classic"} filterClicked={filterClicked}/>
          <FilterItem filterName="High Alcohol" buttonValue={"highABV"} filterClicked={filterClicked} />
          <FilterItem filterName="High Acidity" buttonValue={"highPH"} filterClicked={filterClicked} />
        </div>
      </div>
    </section>
  )
}

export default FiltersList;
