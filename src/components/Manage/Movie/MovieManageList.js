import React from 'react';
import MovieManageListItem from './MovieManageListItem';
import PropTypes from 'prop-types';

const MovieManageList = (props) => (
    <ul className="list-group">
        {props.movies.map(movie => (
            <MovieManageListItem key={movie.pk} movie={movie} showEditForm={props.showEditForm} showDeleteForm={props.showDeleteForm}></MovieManageListItem>
        ))}
    </ul>
);

MovieManageList.propTypes = {
    movie: PropTypes.object,
    showEditForm: PropTypes.func,
    showDeleteForm: PropTypes.func
}

export default MovieManageList;
