import React from 'react';
import MovieItem from './MovieListItem/MovieItem';
import PropTypes from 'prop-types';

const MovieList = (props) =>(
    <ul className="list-group">
        {props.items.map(item => (
            <MovieItem key={item.title} {...item}></MovieItem>
        ))}
    </ul>
);

MovieList.propTypes = {
    item : PropTypes.object
}

export default MovieList;
