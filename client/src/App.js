import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { random } from 'lodash';
import { MDBBox } from 'mdbreact';
import './styles/App.css';
// import Random from './components/Random';
import RandomQuote from './components/RandomQuote'
// import AllQuotes from './components/AllQuotes'
// import AncientQuote from './components/AncientQuote';
// import EnlightenmentQuote from './components/EnlightenmentQuote';
// import ModernQuote from './components/ModernQuote';
// import ArtistQuote from './components/ArtistQuote';
// import EntrepreneurQuote from './components/EntrepreneurQuote';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Wikipedia from './components/Wikipedia';
import Button from './components/Button';
import Background from './images/ancient8.jpg';
import Books from './components/Books';
// import Philosofind from './components/Philosofind';
import Axios from 'axios';

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

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       quote:"",
//       author:"",
//       quotes:[],
//     }
//   }

  // randomQuote = (event) => {
	// 	event.preventDefault();
  //   Axios.get(`https://murmuring-depths-99830.herokuapp.com/quotes/random`)
  //     .then(quote =>
  //       this.setState({ quote: quote.data.quote })
  //     )
  //     .catch(err => console.log(err))
  // }
  
  // manyQuotes = event => {
	// 	event.preventDefault();
	// 	Axios.get(`https://gist.githubusercontent.com/jimmyb2508/b0601acd348790a3ac06aedf36e41885/raw/56528252c459fd3471846ecb6838934c49fb8cd6/quotes.json`)
  //     .then(quote =>
  //       this.setState({ quotes: quote.data })
  //     )
  //     .catch(err => console.log(err))
  // }
  
  // ancientQuote = (event) => {
	// 	event.preventDefault();
  //   Axios.get(`https://gist.githubusercontent.com/jimmyb2508/2e7ead11925f513b453e63d11c478c3a/raw/988d7acc8f98a5b25acea425611b5955d8868947/Ancient_Quote.JSON`)
  //     .then(quote =>
  //       this.setState({ quote: quote.data.quote, author: quote.data.author })
  //     )
  //     .catch(err => console.log(err))
  // }

  // enlightenmentQuote = (event) => {
	// 	event.preventDefault();
  //   Axios.get(`https://gist.githubusercontent.com/jimmyb2508/ae7386136aaab1c2893d77542f1ca985/raw/0418414c61b07ba09ec3c3a1b9d36fddf71540e0/Enlightenment_Quote.JSON`)
  //     .then(quote =>
  //       this.setState({ quote: quote.data.quote, author: quote.data.author })
  //     )
  //     .catch(err => console.log(err))
  // }

  // modernQuote = (event) => {
	// 	event.preventDefault();
  //   Axios.get(`https://gist.githubusercontent.com/jimmyb2508/90c8a135d6ccdcde32440bc3b1d6c5d0/raw/ab93cbd1baf1516f03a18dd01b3f6545f96aeae9/Modern_Quote.JSON`)
  //     .then(quote =>
  //       this.setState({ quote: quote.data.quote, author: quote.data.author })
  //     )
  //     .catch(err => console.log(err))
  // }

  // artistQuote = (event) => {
	// 	event.preventDefault();
  //   Axios.get(`https://gist.githubusercontent.com/jimmyb2508/9187237e0a9e2969790c9b1d7a0dad1c/raw/0ca6f2e16d8df3527062e3fa6ff8aa9409034296/Artist_Quote.JSON`)
  //     .then(quote =>
  //       this.setState({ quote: quote.data.quote, author: quote.data.author })
  //     )
  //     .catch(err => console.log(err))
  // }

  // entrepreneurQuote = (event) => {
	// 	event.preventDefault();
  //   Axios.get(`https://gist.githubusercontent.com/jimmyb2508/beebbc90a3499ddb13404011a44424ed/raw/e6fae24e8c368d540491766f3f33f055e698b373/Entrepreneur_Quote.JSON`)
  //     .then(quote =>
  //       this.setState({ quote: quote.data.quote, author: quote.data.author })
  //     )
  //     .catch(err => console.log(err))
  // }

  render() {
    return (
      <div className="App">
        <div className="NavBar">
          <NavBar />
          <div className="Header">
          </div>
          </div>
          <div className="Body">
          <div className="Quotes">
          <React.Fragment>
            <MDBBox>
              <div
                className="randomcontainer"
                style={{ backgroundImage: `url(${Background})`}}>
                <div className="random-quote">
                    {this.selectedQuote ? `"${this.selectedQuote.quote}" - ${this.selectedQuote.author}` : 'Quote Not Shown!' }
                    
                    {/* <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex} /> */}
                </div>
                <div className="random-button">
                  <Button buttonDisplayName="Philosofind" clickHandler={this.assignNewQuoteIndex}/>
                </div>
              </div>
            </MDBBox>
      </React.Fragment>
          {/* <BrowserRouter>
          <Switch> */}
            {/* <Route
              exact path="/"
              render={props => (
                <RandomQuote {...props}
                quote={this.state.quote}
                randomQuote={this.randomQuote}
                />
              )}
              /> */}
            {/* <Route
              exact path="/ancient"
              render={props => (
                <AncientQuote {...props}
                quote={this.state.quote}
                author={this.state.author}
                ancientQuote={this.ancientQuote}
                />
              )}
              />
            <Route
              exact path="/enlightenment"
              render={props => (
                <EnlightenmentQuote {...props}
                quote={this.state.quote}
                author={this.state.author}
                enlightenmentQuote={this.enlightenmentQuote}
                />
              )}
              />
            <Route
              exact path="/modern"
              render={props => (
                <ModernQuote {...props}
                quote={this.state.quote}
                author={this.state.author}
                modernQuote={this.modernQuote}
                />
              )}
              /> */}
              {/* <Route
                exact path="/artists"
                render={props => {
                  <ArtistQuote {...props}
                  quote={this.state.quote}
                  author={this.state.author}
                  artistQuote={this.artistQuote}
                  />
                }}
              /> */}
            {/* </Switch>
            </BrowserRouter> */}
            </div>
            </div>
          <div className="categories">
            <Categories />
          </div>
          <div className="wikipedia">
            <Wikipedia />
          </div>
          <div className="booksearch">
            <Books />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
    );
  }
}

export default App;
