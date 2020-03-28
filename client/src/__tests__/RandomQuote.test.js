import RandomQuote from '../components/RandomQuote';
import QuoteCard from '../components/QuoteCard';
import React from 'react';
import { shallow } from 'enzyme';

const props = {
  quote: "If I have seen further it is by standing on the shoulders of Giants.",
  randomQuote: jest.fn()
}

describe('RandomQuote', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<RandomQuote {...props} />);
    expect(wrapper.exists()).toBeTruthy();
  });
})
