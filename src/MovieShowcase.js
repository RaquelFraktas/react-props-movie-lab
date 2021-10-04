import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    MovieCard.map(movie => movie.content)
    // movieData.map(movie => [<li>movie.title</li>, <li>movie.IMDBRating</li>, <li>movie.genres</li>, movie.poster])
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
