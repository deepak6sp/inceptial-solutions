import * as React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

const navItems = [
  {
    name: "Home",
    url: "/home",
  },
  {
    name: "About",
    url: "/about"
  }
]

describe('Test Navigation component', () => {
  it('should render navigation items', () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper).toBeDefined();
  });
});