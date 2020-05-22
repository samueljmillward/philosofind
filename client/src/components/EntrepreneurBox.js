import React from 'react'
import Background from '../images/entrepreneurBG.jpg';
import EntrepreneurQuote from './EntrepreneurQuote';

import '../styles/sass/layout/_categories.scss';

const EntrepreneurBox = () => {
  return (
    <div
      className="randomcontainer"
      style={{
        backgroundImage: `url(${Background})`
      }}>
      <EntrepreneurQuote className="EntrepreneurQuote" />
    </div>
  )
}

export default EntrepreneurBox;