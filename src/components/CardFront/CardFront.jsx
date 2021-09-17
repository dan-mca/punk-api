import React, { useState, useEffect } from 'react';
import styles from './CardFront.module.scss';
import classnames from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardFront = (props) => {
  const [ isClassic, setIsClassic] = useState(false);
  const {
    abv,
    ibu,
    image_url,
    name,
    ph,
    tagline
  } = props.beer;

  const {classic} = props;

  useEffect(() => {
    const checkIfClassic = classic ? true : false;
    setIsClassic(checkIfClassic);
  }, [classic]);

  const badgeClass = isClassic ? <div className={styles.badge}><h4>{classic}</h4></div> : null;
  
  return (
    <>
      <div>
        <section className={styles.badgeContainer}>
          {badgeClass}
        </section>
        <div className={styles.imageContainer}>
          <img src={image_url} alt="beer branding"/>
        </div>
        <h2 className={styles.beerName}>{name}</h2>
        <h3 className={styles.tagline}>{tagline}</h3>
        <section className={styles.beerStats}>
          <div className={classnames(styles.oval, styles.abv)}>
            <p>ABV</p>
            <p>{abv}%</p>
          </div>
          <div className={classnames(styles.oval, styles.ibu)}>
            <p>IBU</p>
            <p>{ibu}</p>
          </div>
          <div className={classnames(styles.oval, styles.ph)}>
            <p>PH</p>
            <p>{ph}</p>
          </div>
        </section>
        
        <div className={styles.buttonFront}><button className={styles.cardArrow}><FontAwesomeIcon icon="chevron-down" /></button></div>
        
      </div>
    </>
  )
}

export default CardFront;
