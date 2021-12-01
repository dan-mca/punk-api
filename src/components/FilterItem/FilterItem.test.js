import React from 'react';
import FilterItem from './FilterItem';
import { shallow } from 'enzyme';
import testBeerData from '../../data/beers';

describe("FilterItem tests", () => {
  let component;
  let testBeer;
  let val;

  beforeEach(() => {
    testBeer = testBeerData[0];
    val = testBeer.name;
    component = shallow(<FilterItem value={val} classname={"filterButton"}/>)
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  })

  // it("should have button value as button name", () => {
  //   const beerName = testBeer.name
  //   expect(component.find('button').props().value).toContain(beerName);
  // })

  // it("should toggle classes when class", () => {
  //   expect(component.find('.filterButton').at(0).hasClass('toggled')).toBe(false);

  //   component.find('.filterButton').at(0).simulate('click');
  //   expect(component.find('.filterButton').at(0).hasClass('toggled')).toBe(true);

  //   component.find('.filterButton').at(0).simulate('click');
  //   expect(component.find('.filterButton').at(0).hasClass('toggled')).toBe(false);
  // })
})