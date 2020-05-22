import React from 'react'
import Background from '../images/ancientBG.jpg';
import AncientQuote from './AncientQuote';

import '../styles/sass/layout/_categories.scss';

const AncientBox = () => {
  return (
    <React.Fragment>
      <div
        className="randomcontainer"
        style={{
          backgroundImage: `url(${Background})`
        }}>
        <AncientQuote className="AncientQuote" />
      </div>
    </React.Fragment>

  )
}

export default AncientBox;