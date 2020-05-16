import React from 'react';

import '../styles/TwitterShare.css';

const TwitterShare = ({ quote, author }) => {
  return(
    <React.Fragment>
      <a href={`https://twitter.com/intent/tweet?text= ${quote} ${author}`} target="_blank" rel="noopener noreferrer" title="Post this quote on twitter!" id='tweet-quote'>
        <i className="fab fa-twitter fa-3x"/>
      </a>
    </React.Fragment>
  )
}

export default TwitterShare;