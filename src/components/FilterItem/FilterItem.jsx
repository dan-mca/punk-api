import React, { useState } from 'react';
// import styles from './FilterItem.module.scss';
import './styles.css';

const FilterItem = (props) => {
  const {name, classname, filterClicked} = props;

  const handleFilterClick = (e) => {
    filterClicked(e.target.value);
  };

  return (
    <button className={classname} onClick={handleFilterClick} value={name}>{name}</button>
  );
};

export default FilterItem;
