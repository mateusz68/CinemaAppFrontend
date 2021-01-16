import React from 'react';
import MovieManageListItem from './MovieManageListItem';

const MovieManageList = (props) =>(
    <ul className="list-group">
        {props.movies.map(movie => (
            <MovieManageListItem key={movie.pk} movie={movie} showEditForm={props.showEditForm} showDeleteForm={props.showDeleteForm}></MovieManageListItem>
        ))}
    </ul>
);

export default MovieManageList;
