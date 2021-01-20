import React from 'react';
import * as MovieApi from './../api/MovieApi'
import MovieList from './../components/MoviesList/MovieList'
import SeanseList from './../components/SeansesList/SeansesList'

class Home extends React.Component {
  state = {
    movies: [],
    seanses: [],
  }

  componentDidMount() {
    MovieApi.getLastMovies()
      .then(response => {
        this.setState({
          movies: response,
        })
      });

    MovieApi.getTodaySeanses()
      .then(response => {
        this.setState({
          seanses: response,
        })
      })


  }
  render() {
    return (
      <div>
        <div>
          <h1>Najnowsze filmy</h1>
          <MovieList items={this.state.movies} />
        </div>
        <div className="mt-5 mb-5">
          <h1>Dzisiejsze seanse</h1>
          <SeanseList items={this.state.seanses} />
        </div>
      </div>
    )
  }
}

export default Home;
