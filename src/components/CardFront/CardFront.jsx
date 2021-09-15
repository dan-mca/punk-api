import React from 'react';

const CardFront = (props) => {
  const {
    abv,
    ibu,
    image_url,
    name,
    ph,
    tagline
  } = props.beer;

  const {yearBrewed} = props;
  const isClassic =  yearBrewed < 2010 ? "Classic" : "";

  return (
    <div>
      <div><p>{isClassic}</p></div>
      <img src={image_url} alt="beer branding"/>
      <h2>{name}</h2>
      <div>
        <div>
          <p>ABV</p>
          <p>{abv}</p>
        </div>
        <div>
          <p>IBU</p>
          <p>{ibu}</p>
        </div>
        <div>
          <p>PH</p>
          <p>{ph}</p>
        </div>
      </div>
      <h3>{tagline}</h3>
      <button>Click</button>
    </div>
  )
}

export default CardFront;
