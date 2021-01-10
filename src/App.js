import './App.css';
import React from 'react';
import MovieList from './components/MoviesList/MovieList';
import axios from 'axios';
import * as MovieApi from './api/MovieApi'

const initialStateItems = [
  {
    image: 'https://static.filmaster.com/media/cache/17/88/1788564bbc6b843116fbbaf79ab4e93f.jpg',
    title: 'Piraci z Karaibów: Klątwa Czarnej Perły',
    movieTime: '140',
    hall: "abc"
  },
  {
    image: 'https://www.filmowa.net/images/piraci.jpg',
    title: 'Piraci z Karaibów: Zemsta Salazara',
    movieTime: '120'
  }
]

class App extends React.Component{
  state = {
    items: [...initialStateItems],
  }

  componentDidMount(){
    MovieApi.getAllMovies()
    .then(response =>{
      var movies = response;
      console.log(movies);
      this.setState({
        items: movies,
      })
    })
    
      
  }
  render(){
    return(
      <div>
        <MovieList items={this.state.items}></MovieList>
      </div>
    )
  }
}

export default App;
