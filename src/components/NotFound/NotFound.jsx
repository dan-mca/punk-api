import React from 'react';
import styles from './NotFound.module.scss';

const NotFound = (props) => {
  const {header, text} = props;

  return (
    <div className={styles.notFound}>
      <h2>{header}</h2>
      <p>{text}</p>
    </div>
  )
}

export default NotFound
