import React from 'react'
import { map } from 'ramda'

export default Results

function Results({movies}) {
  return (
    <ul>
      {map(li, movies)}
    </ul>
  )
}

function li (movie) {
  return <li key={movie.imdbID}>
    {movie.Title}
    <img src={movie.Poster} />
  </li>
}
