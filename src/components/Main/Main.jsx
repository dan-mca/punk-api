import React from 'react';
import styles from './Main.module.scss';
import Card from '../Card';
// import beers from '../../data/beers';



const Main = (props) => {
  const { beers } = props;
  const getCardJsx = (beer) => (
    <div className={styles.card} key={beer.id}>
      <Card beer={beer} />
    </div>
  );
 
  return <section className={styles.cards}>{beers.map(getCardJsx)}</section>;
  
}

export default Main;
