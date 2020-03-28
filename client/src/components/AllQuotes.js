import React, { Component } from 'react';
import QuoteCard from './QuoteCard';

class AllQuotes extends Component {

	render() {
		return (
			<div className="all-quotes">
				<button className="quote-btn" onClick={this.props.manyQuotes}><div className="infinite-btn-text">All Quotes</div><i className="chevron fas fa-chevron-circle-right"></i></button>
				<div>
					{
						this.props.quotes && this.props.quotes.length > 0 ?
							this.props.quotes.map((quote, key) => (
								<QuoteCard key={key} {...quote} />
							))
							: <div className="no-quote"></div>
					}
				</div>
			</div>
		)
	}
}


export default AllQuotes;