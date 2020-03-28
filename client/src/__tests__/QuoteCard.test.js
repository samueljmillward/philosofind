import QuoteCard from '../components/QuoteCard';
import React from 'react';
import { shallow } from 'enzyme';

const props = {
  quote: "Be yourself; everyone else is already taken.",
  author: "Oscar Wilde"
}

describe('QuoteCard', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<QuoteCard />);
    expect(wrapper.exists()).toBeTruthy();

  });

xit('renders a quote when passed props', () => {
  const wrapper = shallow(<QuoteCard {...props} />)
  console.log(<QuoteCard {...props} />);
  const quote = wrapper.find('.single-quote');
  const quoteText = quote.text();
  expect(quoteText).toBe(props.quote)

  });
  xit('renders an author when passed props', () => {
    const wrapper = shallow(<QuoteCard {...props} />)
    const author = wrapper.find('.single-author');
    const authorText = author.text();
    expect(authorText).toBe(props.author)
  })
});