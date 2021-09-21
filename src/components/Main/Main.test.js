import React from 'react';
import Main from './Main';
import { shallow } from 'enzyme';
import beersTestData from '../../data/beers';

describe("Main tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Main beers={beersTestData}/>)
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  })
})