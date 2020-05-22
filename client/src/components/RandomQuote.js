import React, { Component } from 'react';
import QuoteCard from './QuoteCard';
import Background from '../images/ancient8.jpg';
import '../styles/sass/pages/_home.scss';

class RandomQuote extends Component {
	render() {
		return (
			<div
				className="randomcontainer"
				style={{
					backgroundImage: `url(${Background})`
				}}>
				<div className="random-quote">
					{this.props.quote && this.props.quote.length > 0 ? <QuoteCard quote={this.props.quote} /> : <div className="error"></div>}
					<button className="quote-btn" onClick={this.props.randomQuote}>Philosofind <i className="chevron fas fa-chevron-circle-right"></i></button>
				</div>
			</div>
		)
	}
}

export default RandomQuote;