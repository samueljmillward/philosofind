import React from 'react';


const Button = ({ buttonDisplayName, clickHandler }) => (
  <button className="quotebutton" onClick={clickHandler}>{buttonDisplayName}</button>
);

export default Button;