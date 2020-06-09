import React from 'react';
import '../styles/sass/components/_button.scss';

const Button = ({ buttonDisplayName, clickHandler }) => (
  <button className="quotebtn" onClick={clickHandler}>{buttonDisplayName}</button>
);

export default Button;