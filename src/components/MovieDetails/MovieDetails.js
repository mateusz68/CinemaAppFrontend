import React from 'react';
import SeanseList from '../SeansesList/SeansesList';
import * as MovieApi from './../../api/MovieApi';
import MoviePopularity from './../MoviePopularity/MoviePopularity';
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
        },
        seanses: [],
    }

    componentDidMount(){
        MovieApi.getSingleMovie(this.props.match.params.id)
        .then(response =>{
          this.setState({
            movie: response,
          })
        });

        MovieApi.getMovieSeanses(this.props.match.params.id)
    .then(response =>{
        this.setState({ 
                seanses: response,
            })
        });
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
                <div className="p-5">
                        <h1>Najbliższe seanse:</h1>
                        <SeanseList items={this.state.seanses} />
                    </div>
                    <div className="text-center mx-auto">
                    <MoviePopularity id={this.props.match.params.id}/>
                    </div>
            </div>
        )
    }
}

export default MovieDetails;