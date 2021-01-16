import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const MovieManageListItem = ({
    movie,
    showEditForm,
    showDeleteForm
}) =>(
    <li className="list-group-item">
        <div className="row">
            <div className="col-4">
            <img className="coverimage" src={movie.cover}/>
            </div>

            <div className="col-6 text-center">
            <h4>{movie.title}</h4>
            <p>Czas trwania: {movie.duration} minut</p>

            </div>
            <div className="col-2 text-center">
                <Button className="m-2" onClick={() => showEditForm(movie)} variant="warning">Edytuj</Button>
                <Button className="m-2" onClick={() => showDeleteForm(movie)} variant="danger">Usuń</Button>


            </div>

        </div>
        
    </li>
)

export default MovieManageListItem;