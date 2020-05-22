import React from 'react'
import Background from '../images/modernBG.jpg';
import ModernQuote from './ModernQuote';

import '../styles/sass/layout/_categories.scss';

const ModernBox = () => {
  return (
    <div
      className="randomcontainer"
      style={{
        backgroundImage: `url(${Background})`
      }}>
      <ModernQuote className="ModernQuote" />
    </div>
  )
}

export default ModernBox;