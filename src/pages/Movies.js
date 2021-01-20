import React from 'react';
import * as MovieApi from './../api/MovieApi';
import MovieList from './../components/MoviesList/MovieList';

class Movies extends React.Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    MovieApi.getAllMovies()
      .then(response => {
        this.setState({
          movies: response,
        })
      });

  }
  render() {
    return (
      <div>
        <h1>Filmy w ofercie</h1>
        <MovieList items={this.state.movies} />
      </div>
    )
  }
}

export default Movies;
