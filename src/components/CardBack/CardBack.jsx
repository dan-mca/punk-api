import React from 'react';

const CardBack = (props) => {
 const {
  abv,
  description,
  ingredients,
  name
 } = props.beer

 const {yearBrewed, malt, hops} = props;

 const isClassic =  yearBrewed < 2010 ? "Classic" : "";

  return (
    <div>
      <div>
        <h2>{name}</h2>
        <p>{abv}</p>
      </div>
      <div>
          <h4>First brewed {yearBrewed}</h4>
          <p>{isClassic}</p>
      </div>
      <div>
        <h4>Description</h4>
        <p>{description}</p>
      </div>
      <div>
        <h4>Ingredients</h4>
        <div>
          <h5>Malt</h5>
          <p>{malt}</p>
        </div>
        <div>
          <h5>Hops</h5>
          <p>{hops}</p>
        </div>
        <div>
          <h5>Yeast</h5>
          <p>{ingredients.yeast}</p>
        </div>
      </div>
    </div>
  )
}

export default CardBack;
