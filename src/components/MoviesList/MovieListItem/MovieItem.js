import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import './MovieItem.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const MovieItem = ({
    pk,
    cover,
    title,
    duration,
    hall,
}) => (
    <li className="list-group-item">
        <div className="row">
            <div className="col-4">
                <img className="coverimage" src={cover} alt="Movie Cover" />
            </div>

            <div className="col-6 text-center">
                <h4>{title}</h4>
                <p>Czas trwania: {duration} minut</p>

            </div>
            <div className="col-2">
                <Link to={'/movie/' + pk}>
                    <Button>Szczegóły</Button>
                </Link>
            </div>

        </div>

    </li>
)

export default MovieItem;