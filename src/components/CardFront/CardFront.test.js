import React from 'react';
import CardFront from './CardFront';
import { shallow } from 'enzyme';
import beerTestData from '../../data/beers';

describe("CardFront tests", () => {
  let component;
  let testBeer;

  beforeEach(() => {
    testBeer = beerTestData[0];
    component = shallow(<CardFront beer={testBeer}/>);
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  })

  it("should render the 'Classic' badge if the beer passed as props was brewed before 2010", () => {
    expect(component.find('.badgeContainer').length).toBe(1);
  })

  it("should render the correct name based on the beer passed in as props", () => {
    const beerName = testBeer.name;
    expect(component.find('h2').text()).toEqual(beerName);
  })

  it("should render the correct image based on the beer passed in as props", () => {
    const beerImage = testBeer.image_url;
    expect(component.find('img').prop('src')).toBe(beerImage);
  })

  it("should render the correct tagline based on the beer passed in as props", () => {
    const beerTagline = testBeer.tagline;
    expect(component.find('h3').text()).toEqual(beerTagline);
  })

  it("should render the 'ABV' text and abv value based on the beer passed in as props", () => {
    const beerABV = testBeer.abv;
    expect(component.find('.abv').text()).toContain("ABV");
    expect(component.find('.abv').text()).toContain(`${beerABV}%`);
  })

  it("should have an arrow button", () => {
    const element = component.find(".buttonFront");
    expect(element.find('button').hasClass('cardArrow')).toBe(true);
  })

})