import React, { Component } from 'react';
import Background from '../images/ancient8.jpg';
import '../styles/Main.css';

class Main extends Component {
  render() {
    return (
      <div className="MainBackground"
      style={{ 
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
        }}
      >
      </div>
    )
  }
}

export default Main;