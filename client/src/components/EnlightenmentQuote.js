import React, { Component } from 'react';
import QuoteCard from './QuoteCard';
import Background from '../images/EnlightenmentWallpaper.jpg'
import '../styles/EnlightenmentQuote.css';

class EnlightenmentQuote extends Component {
	render() {
		return (
      <div 
      className="ancient-container"
      style={{ 
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
        }}>
			<div className="enlightenment-quote">
				{this.props.quote && this.props.quote.length > 0 ? <QuoteCard quote={this.props.quote} author={this.props.author} /> : <div className="error"></div>}
				<button className="quote-btn" onClick={this.props.enlightenmentQuote}>Enlightenment Quote <i className="chevron fas fa-chevron-circle-right"></i></button>
			</div>
      </div>
		)
	}
}

export default EnlightenmentQuote;