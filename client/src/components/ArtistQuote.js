import React, { Component } from 'react';
import QuoteCard from './QuoteCard';
import Background from '../images/ArtistWallpaper.jpg';
import '../styles/ArtistQuote.css';

class ArtistQuote extends Component {
	render() {
		return (
      <div 
        className="ancient-container"
        style={{ 
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
          }}>
			  <div className="artist-quote">
				  {this.props.quote && this.props.quote.length > 0 ? <QuoteCard quote={this.props.quote} author={this.props.author} /> : <div className="error"></div>}
				<button className="quote-btn" onClick={this.props.artistQuote}>Artist Quote <i className="chevron fas fa-chevron-circle-right"></i></button>
			  </div>
      </div>
		)
	}
}

export default ArtistQuote;