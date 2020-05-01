import React from 'react'
import Background from '../images/artistsBG.jpg';
import ArtistsQuote from './ArtistsQuote';

import '../styles/App.css';

const ArtistsBox = () => {
    return (
      <div
        className="artistscontainer"
        style={{ 
        backgroundImage: `url(${Background})`}}>
        <ArtistsQuote className="ArtistsQuote" />
      </div>
    )
  }

export default ArtistsBox;