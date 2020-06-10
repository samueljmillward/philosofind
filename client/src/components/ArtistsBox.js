import React from 'react'
import Background from '../images/artistsBG.jpg';
import ArtistsQuote from './ArtistsQuote';

import '../styles/sass/layout/_categories.scss';

const ArtistsBox = () => {
  return (
    <div
      className="randomcontainer"
      style={{
        backgroundImage: `url(${Background})`
      }}>
      <ArtistsQuote className="ArtistsQuote" />
    </div>
  )
}

export default ArtistsBox;