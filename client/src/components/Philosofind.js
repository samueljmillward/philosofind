import React, { Component } from 'react';
import { random } from 'lodash';
import { MDBBox } from 'mdbreact';
import Button from './Button';
import '../styles/Philosofind.css';
import QuoteMachine from './QuoteMachine';

class Philosofind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    }
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.selectQuoteIndex = this.generateNewQuoteIndex.bind(this);
  }

  /* API Call */

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/jimmyb2508/b0601acd348790a3ac06aedf36e41885/raw/e3d5ba71374b10f72dd93ca752f6f0ce8368722d/quotes.json')
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

  render() {
    return (
      <React.Fragment>
        <MDBBox>
            <div className="Main">
            {this.selectedQuote ? `"${this.selectedQuote.quote}" - ${this.selectedQuote.author}` : 'Quote Not Shown!' }
            <Button buttonDisplayName="Next Quote" clickHandler={this.assignNewQuoteIndex}/>
            {/* <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex} /> */}
            </div>
            <div className="randombutton">
          </div>
        </MDBBox>
      </React.Fragment>
    );
  }
}

export default Philosofind;
