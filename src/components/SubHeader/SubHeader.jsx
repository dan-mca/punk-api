import React from 'react';
import styles from './SubHeader.module.scss';
import FiltersList from '../FiltersList';

const SubHeader = () => {
  return (
    <section className={styles.subHeader}>
      <FiltersList />
    </section>
    
  )
}

export default SubHeader;
