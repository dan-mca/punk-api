import React from 'react';
import styles from './Card.module.scss';
import CardFront from '../CardFront';
import CardBack from '../CardBack';

// import beers from '../../data/beers';


const Card = (props) => {
  // const beer = beers[2];
  const { beer } = props;
  
  const ingredientList = (type) => {
    let maltArr = [];
    type.forEach((malt) => {
      maltArr.push(` ${malt.name}`);
    })
    return maltArr.toString();
  };
  
  const yearBrewed = beer.first_brewed.slice(3, 7);

  const classic =  yearBrewed < 2010 ? "Classic" : null;


  return (
    <>
      <div className={styles.cards}>
        <CardFront beer={beer} classic={classic}/>
      
        {/* <CardBack 
          beer={beer} 
          yearBrewed={yearBrewed} 
          classic={classic} 
          malt={ingredientList(beer.ingredients.malt)} 
          hops={ingredientList(beer.ingredients.hops)} 
        /> */}
      </div>
    </>
  )
}

export default Card;
