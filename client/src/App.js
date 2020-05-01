import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route 
} from "react-router-dom";
import { random } from 'lodash';
import { MDBBox } from 'mdbreact';
import './styles/App.css';
import NavBar from './components/NavBar';
import PhilosofindBox from './components/PhilosofindBox';
import AncientBox from './components/AncientBox';
import EnlightenmentBox from './components/EnlightenmentBox';
import ModernBox from './components/ModernBox';
import ArtistsBox from './components/ArtistsBox';
import EntrepreneurBox from './components/EntrepreneurBox';
import ScientistsBox from './components/ScientstsBox';
import Button from './components/Button';
import Categories from './components/Categories';
import Wikipedia from './components/Wikipedia';
import Books from './components/Books';
import Footer from './components/Footer';

class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       quotes: [],
//       selectedQuoteIndex: null,
//     }
//     this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
//     this.selectQuoteIndex = this.generateNewQuoteIndex.bind(this);
//   }

//   componentDidMount() {
//     fetch('https://murmuring-depths-99830.herokuapp.com/quotes')
//       .then(data => data.json())
//       .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
//   }

//   get selectedQuote() {
//     if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
//       return undefined;
//     }
//     return this.state.quotes[this.state.selectedQuoteIndex];
//   }

//   /* Returns an integer representing an index in state.quotes*/
//   /* If state.quotes is empty then it returns undefined */

//   generateNewQuoteIndex() {
//     if (!this.state.quotes.length) {
//       return undefined;
//     }
//     return random(0, this.state.quotes.length -1);
//   }

// assignNewQuoteIndex() {
//   this.setState({ selectedQuoteIndex: this.generateNewQuoteIndex() });
// }

// viewAllQuotes() {
//   this.setState({ });
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
            <Router>
              <Route exact path="/">
                <PhilosofindBox />
              </Route>
              <Route exact path="/ancient">
                <AncientBox />
              </Route>
              <Route exact path="/enlightenment">
                <EnlightenmentBox />
              </Route>
              <Route exact path="/modern">
                <ModernBox />
              </Route>
              <Route exact path="/artists">
                <ArtistsBox />
              </Route>
              <Route exact path="/entrepreneurs">
                <EntrepreneurBox />
              </Route>
              <Route exact path="/scientists">
                <ScientistsBox />
              </Route>
            </Router>
              {/* <div
                className="randomcontainer"
                style={{ backgroundImage: `url(${Background})`}}>
                  <div className="random-quote">
                    {this.selectedQuote ? `"${this.selectedQuote.quote}" - ${this.selectedQuote.author}` : 'Quote Not Shown!' }
                  </div>
                  <div className="random-button">
                    <Button buttonDisplayName="Philosofind" clickHandler={this.assignNewQuoteIndex}/>
                  </div>
              </div> */}
            </MDBBox>
          </React.Fragment>
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
