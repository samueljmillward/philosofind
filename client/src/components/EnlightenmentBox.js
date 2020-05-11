import React from 'react'
import Background from '../images/enlightenmentBG.jpg';
import EnlightenmentQuote from './EnlightenmentQuote';

import '../styles/App.css';

const EnlightenmentBox = () => {
    return (
      <div
      className="enlightenmentcontainer"
      style={{ 
        backgroundImage: `url(${Background})`}}>
        <EnlightenmentQuote className="EnlightenmentQuote" />
      </div>
    )
  }

export default EnlightenmentBox;