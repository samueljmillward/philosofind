import React, { Component } from 'react';
import { random } from 'lodash';
import Button from './Button';

import '../styles/App.css';

class AncientQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    }
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.selectQuoteIndex = this.generateNewQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://murmuring-depths-99830.herokuapp.com/quotes')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  /* Returns an integer representing an index in state.quotes*/
  /* If state.quotes is empty then it returns undefined */

  generateNewQuoteIndex() {
    if (!this.state.quotes.length) {
      return undefined;
    }
    return random(0, this.state.quotes.length -1);
  }

assignNewQuoteIndex() {
  this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() });
}

viewAllQuotes() {
  this.setState({ });
}

render () {
  return (
    <React.Fragment>
    <div>
      <div>
        <h1 className="randomquote">{this.selectedQuote ? `"${this.selectedQuote.quote}" - ${this.selectedQuote.author}` : 'Quote Not Shown!' }</h1>
      </div>
          <Button buttonDisplayName="Philosofind" clickHandler={this.assignNewQuoteIndex} />
    </div>
    </React.Fragment>
    )
  }
}

export default AncientQuote;