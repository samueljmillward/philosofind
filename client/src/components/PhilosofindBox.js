import React from 'react'
import Background from '../images/philosofindBG.jpg';
import PhilosofindQuote from './PhilosofindQuote';

import '../styles/sass/pages/_home.scss';

const PhilosofindBox = () => {
  return (
    <React.Fragment>
      <div
        className="randomcontainer"
        style={{
          backgroundImage: `url(${Background})`
        }}>
        <PhilosofindQuote className="PhilosofindQuote" />
      </div>
    </React.Fragment>
  )
}

export default PhilosofindBox;