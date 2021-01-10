import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import './MovieItem.css';

const MovieItem = ({
    cover,
    title,
    duration,
    hall,
}) =>(
    <li className="list-group-item">
        <div className="row">
            <div className="col-4">
            <img className="coverimage" src={cover}/>
            </div>

            <div className="col-6 text-center">
            <h4>{title}</h4>
            <p>Czas trwania: {duration} minut</p>
<p>{!hall ? "" : "Sala " + hall}</p>

            </div>
            <div className="col-2">
            <Button>Szczegóły</Button>


            </div>

        </div>
        
    </li>
)

export default MovieItem;