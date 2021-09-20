import React, { useState } from 'react';
import styles from './FiltersList.module.scss';
import FilterItem from "../FilterItem";

const FiltersList = (props) => {
  const { selectedFilter } = props;
  const [currentFilter, setCurrentFilter] = useState(null);

  const filters = [
    { name: "Classic Range" },
    { name: "High ABV" },
    { name: "High PH" },
    { name: "Clear Filters" },
  ];

  const updateSelectedFilter = (filter) => {
    setCurrentFilter(filter)
    selectedFilter(filter);
  };


  return (
    <section className={styles.subHeader}>
      <div className={styles.filtersContainer}>
        <h3>Filter beers:</h3>
        <div className={styles.filters}>
          <FilterItem
          name={filters[0].name}
          filterClicked={updateSelectedFilter}
          classname={`filterButton ${currentFilter === filters[0].name ? "toggled" : ""}`}
          />
          <FilterItem
            name={filters[1].name}
            filterClicked={updateSelectedFilter}
            classname={`filterButton ${currentFilter === filters[1].name ? "toggled" : ""}`}
          />
          <FilterItem
            name={filters[2].name}
            filterClicked={updateSelectedFilter}
            classname={`filterButton ${currentFilter === filters[2].name ? "toggled" : ""}`}
          />
          <FilterItem
            name={filters[3].name}
            filterClicked={updateSelectedFilter}
            classname={`clearButton ${currentFilter === filters[3].name ? "toggled" : ""}`}
          />
        </div>
      </div>
    </section>
  )
}

export default FiltersList;
