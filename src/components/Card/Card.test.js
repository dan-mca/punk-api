import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';
import testBeerData from '../../data/beers';

describe("Card tests", () => {
  let component;
  let testBeer;

  beforeEach(() => {
    testBeer = testBeerData[0];
    component = shallow(<Card beer={testBeer}/>)
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  })

  it("should not have the faceDown class by default", () => {
    const element = component.find(".beerCard");
    expect(element.hasClass('faceDown')).toBe(false);
  })

  it("should toggle faceDown class when component is clicked", () => {
    expect(component.find('.beerCard').hasClass('faceDown')).toBe(false);

    component.find('.beerCard').simulate('click');
    expect(component.find('.beerCard').hasClass('faceDown')).toBe(true);

    component.find('.beerCard').simulate('click');
    expect(component.find('.beerCard').hasClass('faceDown')).toBe(false);
  })


});