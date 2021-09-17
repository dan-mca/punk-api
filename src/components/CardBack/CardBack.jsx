import React from 'react';
import styles from './CardBack.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardBack = (props) => {
 const {
  abv,
  description,
  ingredients,
  name
 } = props.beer

 const {yearBrewed, classic, malt, hops} = props;

  return (
    <div className={styles.cardBack}>
      <div className={styles.nameABV}>
        <h2>{name}<span> {abv}%</span></h2>
      </div>
      <div className={styles.firstBrewed}>
          <h4>First brewed {yearBrewed}</h4>
          <p>{classic}</p>
      </div>
      <div className={styles.description}>
        <h3>Description</h3>
        <p className={styles.descriptionText}>{description}</p>
      </div>
      <section className={styles.ingredients}>
        <h3>Ingredients</h3>
        <div className={styles.malt}>
          <h4>Malt:</h4>
          <p>{malt}</p>
        </div>
        <div className={styles.hops}>
          <h4>Hops:</h4>
          <p>{hops}</p>
        </div>
        <div className={styles.yeast}>
          <h4>Yeast:</h4>
          <p>{ingredients.yeast}</p>
        </div>
      </section>
      <div className={styles.buttonBack}><button className={styles.cardArrow}><FontAwesomeIcon icon="arrow-left" /></button></div>
    </div>
  )
}

export default CardBack;
