import React, { Component } from 'react';
import QuoteCard from './QuoteCard';
import '../styles/AncientQuote.css';

class ScienceQuote extends Component {
	render() {
		return (
			<div className="ancient-quote">
				{this.props.quote && this.props.quote.length > 0 ? <QuoteCard quote={this.props.quote} author={this.props.author} /> : <div className="error"></div>}
				<button className="quote-btn" onClick={this.props.ancientQuote}>Ancient Quote <i className="chevron fas fa-chevron-circle-right"></i></button>
			</div>
		)
	}
}

export default ScienceQuote;