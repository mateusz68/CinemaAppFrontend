import React from 'react';

const MovieDetails = ({ movie }) => (
    <div className="row ">
        <div className="col-4 text-center">
            <img className="img-fluid" src={movie.cover} />
        </div>
        <div className="col-8">
            <h4>{movie.title}</h4>
            <p>Czas trwania: {movie.duration} minut</p>
            <p>Opis:</p>
            <p>....</p>
        </div>

    </div>
);


export default MovieDetails;
