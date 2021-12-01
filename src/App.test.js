import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
// import { getPunkBeers } from './services/beers.service';


describe("NotFound tests", () => {
  let component;

  beforeEach(() => {
    component = shallow(<App />)
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  })

})

