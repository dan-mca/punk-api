import React from 'react';
import CardFront from '../CardFront';
import CardBack from '../CardBack';

import beers from '../../data/beers';


const Main = () => {
  const beer = beers[0];
  
  const ingredientList = (type) => {
    let maltArr = [];
    type.forEach((malt) => {
      maltArr.push(malt.name);
    })
    return maltArr.toString();
  };

  
  const yearBrewed = beer.first_brewed.slice(3, 7)


  return (
    <>
      <CardFront beer={beer} yearBrewed={yearBrewed}/>
      <CardBack beer={beer} yearBrewed={yearBrewed} malt={ingredientList(beer.ingredients.malt)} hops={ingredientList(beer.ingredients.hops)} />
    </>
  )
}

export default Main;
