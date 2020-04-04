import React, { Component } from 'react';
import QuoteCard from './QuoteCard';
import '../styles/AncientQuote.css';
import Background from '../images/ancient8.jpg';

class AncientQuote extends Component {
	render() {
		return (
      <div 
      className="ancient-container"
      style={{ 
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
        }}>
			<div className="ancient-quote">
				{this.props.quote && this.props.quote.length > 0 ? <QuoteCard quote={this.props.quote} author={this.props.author} /> : <div className="error"></div>}
				<button className="quote-btn" onClick={this.props.ancientQuote}>Ancient Quote <i className="chevron fas fa-chevron-circle-right"></i></button>
			</div>
      </div>
		)
	}
}

export default AncientQuote;