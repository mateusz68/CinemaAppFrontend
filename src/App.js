import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MovieList from './components/MoviesList/MovieList';
import axios from 'axios';
import * as MovieApi from './api/MovieApi'
import MovieDetails from './components/MovieDetails/MovieDetails'

class App extends React.Component{
  state = {
    items: [],
  }

  componentDidMount(){
    MovieApi.getAllMovies()
    .then(response =>{
      var movies = response;
      this.setState({
        items: movies,
      })
    })
    
      
  }
  render(){
    return(
      
        <Router>
           <div className="topnav">
            <div className="topnavElements">
                <Link to="/" className="navElement">Home</Link>
            </div>
        </div >
<Route exact path="/" render={() => <MovieList items={this.state.items} />} />
<Route exact path="/movie/:id" component={MovieDetails} />

</Router>

    )
  }
}

export default App;
