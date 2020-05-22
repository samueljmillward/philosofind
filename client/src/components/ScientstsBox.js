import React from 'react'
import Background from '../images/scientistsBG.jpg';
import ScientistsQuote from './ScientistsQuote';

import '../styles/sass/layout/_categories.scss';

const ScientistsBox = () => {
  return (
    <div
      className="artistscontainer"
      style={{
        backgroundImage: `url(${Background})`
      }}>
      <ScientistsQuote className="ScientistsQuote" />
    </div>
  )
}

export default ScientistsBox;