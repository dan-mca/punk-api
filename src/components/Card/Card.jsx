import React, { useState } from 'react';
import styles from './Card.module.scss';
import CardFront from '../CardFront';
import CardBack from '../CardBack';

const Card = (props) => {
  const { beer } = props;
  const [isFaceDown, setIsFaceDown] = useState(false);

  const flipStyles = isFaceDown ? styles.faceDown : "";
  
  // get list of sub ingredients based on ingredient type (malt or hops) and return as a list
  const ingredientList = (type) => {
    let ingredientsArr = [];
    type.forEach((malt) => {
      ingredientsArr.push(` ${malt.name}`);
    })
    return ingredientsArr.toString();
  };
  
  const yearBrewed = beer.first_brewed.slice(3, 7);

  const classic =  yearBrewed < 2010 ? "Classic" : null;


  return (
    <>
      <section className={`${styles.beerCard} ${flipStyles}`} onClick={() => setIsFaceDown(!isFaceDown)}>
        <div className={styles.front}>
          <CardFront beer={beer} classic={classic}/> 
        </div>

        <div className={styles.back}>
          <CardBack 
            beer={beer} 
            yearBrewed={yearBrewed} 
            classic={classic} 
            malt={ingredientList(beer.ingredients.malt)} 
            hops={ingredientList(beer.ingredients.hops)} 
          />
        </div>
      </section>
    </>
  )
}

export default Card;
