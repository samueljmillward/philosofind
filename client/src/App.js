import React, { Component } from 'react';
import './App.css';
import Random from './components/Random';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Wikipedia from './components/Wikipedia';

class App extends Component {
  constructor(props) {
    super(props);
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
            <Random />
          </div>
          <div className="categories">
            <Categories />
          </div>
          <div className="wikipedia">
            <Wikipedia />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
    );
  }
}

export default App;
