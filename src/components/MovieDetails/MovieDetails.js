import React from 'react';
import * as MovieApi from './../../api/MovieApi';
class  MovieDetails extends React.Component{
    constructor(props){
        super(props);
    }
    state ={
        movie: {
            pk : 0,
            title: "",
            duration: 0,
            cover: "",
        }
    }

    componentDidMount(){
        MovieApi.getSingleMovie(this.props.match.params.id)
        .then(response =>{
          var movie = response;
          console.log(movie);
          this.setState({
            movie: movie,
          })
        })
    }

    render () {
        return(
            <div>
                <div className="row ">
                    <div className="col-4 text-center">
                    <img className="img-fluid" src={this.state.movie.cover}/>
                    </div>
                    <div className="col-8">
        <h4>{this.state.movie.title}</h4>
        <p>Czas trwania: {this.state.movie.duration} minut</p>
        <p>Opis:</p>
        <p>....</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetails;