import React, { Component } from 'react';
import QuoteCard from './QuoteCard';
import '../styles/ArtistQuote.css';

class ArtistQuote extends Component {
	render() {
		return (
			<div className="artist-quote">
				{this.props.quote && this.props.quote.length > 0 ? <QuoteCard quote={this.props.quote} author={this.props.author} /> : <div className="error"></div>}
				<button className="quote-btn" onClick={this.props.artistQuote}>Artist Quote <i className="chevron fas fa-chevron-circle-right"></i></button>
			</div>
		)
	}
}

export default ArtistQuote;