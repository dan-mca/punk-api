import React from 'react';
import CardBack from './CardBack';
import { shallow } from 'enzyme';
import beerTestData from '../../data/beers';

describe("CardBack tests", () => {
  let component;
  let testBeer;
  let yearBrewed;
  let classic;
  let ingredients;
  

  beforeEach(() => {
    testBeer = beerTestData[0];
    yearBrewed = (beerTestData[0].first_brewed).slice(3,7);
    ingredients = testBeer.ingredients;
    classic =  yearBrewed < 2010 ? "Classic" : null;
    const ingredientList = (type) => {
      let maltArr = [];
      type.forEach((malt) => {
        maltArr.push(` ${malt.name}`);
      })
      return maltArr.toString();
    };
  
    component = shallow(
      <CardBack 
        beer={testBeer} 
        yearBrewed={yearBrewed} 
        classic={classic}
        malt={ingredientList(ingredients.malt)}
        hops={ingredientList(ingredients.hops)}
      />);
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  })

  it("should render the the correct name and ABV based on the beer passed in as props", () => {
    const beerName = testBeer.name;
    const beerABV = testBeer.abv;
    expect(component.find('h2').text()).toEqual(`${beerName} ${beerABV}%`);
  })

  it("should render the year first brewed based on the beer passed in as props", () => {
      const yearFirstBrewed = (testBeer.first_brewed).slice(3,7);
      expect(component.find('.firstBrewed h4').text()).toContain(`First brewed ${yearFirstBrewed}`);
    })

    it("should render 'Classic' if first brewed < 2010 based on the beer passed in as props", () => {
      const classicBeer = (testBeer.first_brewed).slice(3,7) < 2010 ? "Classic" : null;
      expect(component.find('.firstBrewed p').text()).toEqual(classicBeer);
    })

    it("should render malt ingredients based on the beer passed in as props", () => {
      const mock = jest.fn();
      mock.mockReturnValue(' Maris Otter Extra Pale, Caramalt, Munich');
      expect(component.find('.malt p').text()).toBe(mock());
    })

    it("should render hop ingredients based on the beer passed in as props", () => {
      const mock = jest.fn();
      mock.mockReturnValue(' Fuggles, First Gold, Fuggles, First Gold, Cascade');
      expect(component.find('.hops p').text()).toBe(mock());
    })

    it("should render yeast ingredient based on the beer passed in as props", () => {
      expect(component.find('.yeast p').text()).toEqual(ingredients.yeast);
    })

    it("should have an arrow button", () => {
      const element = component.find(".buttonBack");
      expect(element.find('button').hasClass('cardArrow')).toBe(true);
    })

})