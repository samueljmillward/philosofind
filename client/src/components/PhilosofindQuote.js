import React, { Component } from 'react';
import Axios from 'axios';
import Button from './Button';
import TwitterShare from './TwitterShare';

import '../styles/sass/pages/_home.scss';

class PhilosofindQuote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      author: ''
    }
  }

  componentDidMount() {
    this.getQuote()
  }

  getQuote() {
    let url = 'https://murmuring-depths-99830.herokuapp.com/quotes/random'

    Axios.get(url)
      .then(res => {
        let randomQuote = res.data;

        this.setState({
          quote: randomQuote['quote'],
          author: randomQuote['author']
        })
      })
  }

  getNewQuote = () => {
    this.getQuote()
  }

  render() {
    const { quote, author } = this.state
    return (
      <div id="wrapper">
        <div>
          <h1 className="randomquote">{quote} - {author}</h1>
        </div>
        <div className="buttons">
          <Button buttonDisplayName="Philosofind" clickHandler={this.getNewQuote} />
          <TwitterShare quote={quote} author={author} />
        </div>
      </div>
    )
  }
}

export default PhilosofindQuote;