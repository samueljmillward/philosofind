import React from 'react'

import '../styles/API.css';

const AncientBox = () => {
    return (
      <React.Fragment>
        <div className="api-container">

          <div className="api-info">
            <h1>Philosofind RESTful APIs</h1>
            <p>You can view quotations and import them into your own application's using a range of RESTful APIs. The Philosofind team strive to maintain a comprehensive database of quotations to ensure this content is valuable for its users. <em>Hic Rhodus, hic salta!</em></p>
          </div>

          <div className="api-routes">

          <div className="json">
            <h2>JSON</h2>
            <p>Each quotation will look like this:</p>
          <div className="json-code-snippet">
            <pre>
              <code>
                 <p>{` _id: "...", quote: "...", author: "...", category: "...", __v: 0 `}</p>
              </code>
            </pre>
          </div>
          </div>

          <div className="all-quotes">
            <h2>Fetch All Quotes</h2>
            <p>You can view all the quotes here:</p>
          <div className="code-snippet">
            <p>https://murmuring-depths-99830.herokuapp.com/quotes</p>
          </div>
          </div>

          <div className="philosofind">
            <h2>Philosofind: Find a random quote from all categories</h2>
            <p>You can view and random quote across all categories.</p>
            <p>For example, to view a random quote from any category the following URL can be used.</p>
          <div className="category-random-code-snippet">
            <p>https://murmuring-depths-99830.herokuapp.com/quotes/random</p>
          </div>
          </div>



          <div className="category-quotes">
            <h2>Fetch All Quotes in a Category</h2>
            <p>You can view all of the quotes in a given category by including the name of the category at the end of the URL.</p>
            <p>For example, to view all quotes from the ancient philosophy section the following URL must be used.</p>
          <div className="category-code-snippet">
            <p>https://murmuring-depths-99830.herokuapp.com/quotes/ancient</p>
          </div>
          </div>

          <div className="category-random-quote">
            <h2>Fetch a Random Quote from a Category</h2>
            <p>You can view random quote in a given category by including the name of the category followed by '/random'.</p>
            <p>For example, to view a random quote from the ancient philosophy section the following URL must be used.</p>
          <div className="category-random-code-snippet">
            <p>https://murmuring-depths-99830.herokuapp.com/quotes/ancient/random</p>
          </div>
          </div>


          </div>
        </div>
      </React.Fragment>

    )
  }

export default AncientBox;