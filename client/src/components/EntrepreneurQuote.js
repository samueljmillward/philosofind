import React, { Component } from 'react';
import QuoteCard from './QuoteCard';
import '../styles/EntrepreneurQuote.css';

class EntrepreneurQuote extends Component {
	render() {
		return (
			<div className="entrepreneur-quote">
				{this.props.quote && this.props.quote.length > 0 ? <QuoteCard quote={this.props.quote} author={this.props.author} /> : <div className="error"></div>}
				<button className="quote-btn" onClick={this.props.entrepreneurQuote}>Entrepreneur Quote <i className="chevron fas fa-chevron-circle-right"></i></button>
			</div>
		)
	}
}

export default EntrepreneurQuote;