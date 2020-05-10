import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route 
} from "react-router-dom";
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
import APIBox from './components/APIBox';
import Categories from './components/Categories';
import Wikipedia from './components/Wikipedia';
import Books from './components/Books';
import Footer from './components/Footer';

class App extends Component {
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
              <Route path="/API">
                <APIBox />
              </Route>
            </Router>
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
