import React, { Component } from 'react';
import { random } from 'lodash';
import './App.css';
import Button from './components/Button';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
// import Wikipedia from './components/Wikipedia';
// import Books from './components/Books';
// import Contact from './components/Contact'
// import QuoteMachine from './components/QuoteMachine';

class App extends Component {
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

  render() {
    return (
      <div className="App">
        <div className="NavBar">
          <NavBar />
          <div className="Header">
          </div>
        </div>
          <div className="Main">
            {this.selectedQuote ? `"${this.selectedQuote.quote}" - ${this.selectedQuote.author}` : 'Quote Not Shown!' }
            {/* <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex} /> */}
          </div>
          <div className="randombutton">
              <Button buttonDisplayName="Next Quote" clickHandler={this.assignNewQuoteIndex}/>
            </div>
          {/* <div className="wikipedia">
            <Wikipedia />
          </div> */}
          {/* <div className="Books">
            <Books />
          </div> */}
          <div className="footer">
              <Footer />
            </div>
        </div>
    );
  }
}

export default App;
