import React from 'react';
import SeanseList from './../components/SeansesList/SeansesList';
import * as MovieApi from './../api/MovieApi';
import MoviePopularity from './../components/MoviePopularity/MoviePopularity';
import MovieDetails from './../components/MovieDetails/MovieDetails'

class  Movie extends React.Component{
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
            console.log("stan")
            console.log(this.state)
        });
    }

    render () {
        return(
            <div>
                <MovieDetails movie={this.state.movie} />
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

export default Movie;