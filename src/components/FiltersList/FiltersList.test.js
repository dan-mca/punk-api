import React from 'react';
import FiltersList from './FiltersList';
import { shallow } from 'enzyme';

describe("FiltersList tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<FiltersList selectFilter="Classic Range"/>)
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  })

  it("should render text 'Filter beers:'", () => {
    expect(component.find('h3').text()).toEqual('Filter beers:');
  })
})