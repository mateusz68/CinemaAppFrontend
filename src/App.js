import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as MovieApi from './api/MovieApi';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Seanses from './pages/Seanses';
import BuyTicket from './pages/BuyTicket';
import Movie from './pages/Movie';
import ManageMovies from './pages/ManageMovies';
import ManageSeanses from './pages/ManageSeanses';

class App extends React.Component {
  state = {
    items: [],
  }

  componentDidMount() {
    MovieApi.getAllMovies()
      .then(response => {
        var movies = response;
        this.setState({
          items: movies,
        })
      })


  }
  render() {
    return (
      <div>

        <div className="container mt-2 mb-5">


          <Router>
            <Navigation />
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={Movies} />
            <Route exact path="/seanses" component={Seanses} />
            <Route exact path="/movie/:id" component={Movie} />
            <Route exact path="/ticket/:id" component={BuyTicket} />
            <Route exact path="/manage/movies" component={ManageMovies} />
            <Route exact path="/manage/seanses" component={ManageSeanses} />
          </Router>
        </div>


        <footer class="py-5 bg-dark">
          <div class="container">
            <p class="m-0 text-center text-white">Kino 2020</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default App;
