import React from 'react'
import Background from '../images/philosofindBG.jpg';
import PhilosofindQuote from './PhilosofindQuote';

import '../styles/App.css';

const PhilosofindBox = () => {
    return (
      <React.Fragment>
        <div
          className="randomcontainer"
          style={{ 
          backgroundImage: `url(${Background})`}}>
          <PhilosofindQuote className="PhilosofindQuote"/>
        </div>
      </React.Fragment>
    )
  }

export default PhilosofindBox;