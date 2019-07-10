import React, { useState } from 'react';
import Form from './form'
import Results from './results'
import './App.css';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJNb3ZpZSBTZWFyY2giLCJpYXQiOjE0OTg5MDkwMDYsImV4cCI6MTU5MzYwMzQwNiwiYXVkIjoibW92aWUtc2VhcmNoLmpycy5jYW1wIiwic3ViIjoibW92aWUtc2VhcmNoIn0.-U--gAcHA3rmbVIXYN-3fnhC37FuQa4KrXpmZG3D0G8'

function searchMovies(criteria) {
  return fetch('https://movie-search.jrs.camp?q=' + encodeURI(criteria), {
    headers: {
      authorization: 'Bearer ' + token
    }
  })
    .then(response => response.json())
    
}

function App() {
  const [results, setResults] = useState([])

  function handleSearch(criteria) {
    searchMovies(criteria)
      .then(v => {
        console.log(v)
        return v
      })
      .then(searchResults => setResults(searchResults.Search))
  }

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
        <h1 className="title">Movie Search</h1>
        <Form onSearch={handleSearch}   />
      </div>
      <div className="column">
        <div className="box">
          <Results movies={results} />
        </div>
      </div>
    </div>
    </div>
    </section>
  );
}

export default App;
