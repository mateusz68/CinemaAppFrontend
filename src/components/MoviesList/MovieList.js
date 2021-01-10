import React from 'react';
import MovieItem from './MovieListItem/MovieItem';

const MovieList = (props) =>(
    <ul className="list-group">
        {props.items.map(item => (
            <MovieItem key={item.title} {...item}></MovieItem>
        ))}
    </ul>
);

export default MovieList;
