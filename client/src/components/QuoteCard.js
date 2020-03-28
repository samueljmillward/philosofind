import React from 'react';

const QuoteCard = (props) => {
	const {
    quote,
    author
	} = props;


	return (
		<div className="random-quote" >
			<p>{quote} - {author}</p>
		</div>
	)
}

export default QuoteCard