import React from 'react';
import styles from './FilterItem.module.scss';

const FilterItem = (props) => {
  const { filterName, buttonValue, filterClicked } = props;

  return (
    <>
      <button className={styles.filterButton} value={buttonValue}onClick={(e) => filterClicked(e.target.value)}
      >
        {filterName}
      </button>
    </>
  )
}

export default FilterItem;
