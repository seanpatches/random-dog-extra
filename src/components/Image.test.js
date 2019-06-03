import React from 'react';
import { shallow } from 'enzyme';
import Image from './Image';

describe('Image component', () => {
  it('renders image comp', () => {
    const img = 'https://images.dog.ceo/breeds/shiba/shiba-6.jpg';
    const wrapper = shallow(<Image img={img}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
