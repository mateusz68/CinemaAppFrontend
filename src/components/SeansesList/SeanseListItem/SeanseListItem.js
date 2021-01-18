import React from 'react';
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment/locale/pl';

const SeanseItem = ({
    pk,
    date,
    hall,
    prince,
    sold_tickets,
    movie,
}) => (
    <li className="list-group-item">
        <h5 className="text-center">Film {movie.title}</h5>
        <div className="row">
            <div className="col-4">

            <p>Data seansu: <Moment local format="D MMM YYYY HH:mm:ss">{date}</Moment></p>
                <p><Moment local fromNow>{date}</Moment></p>
                <p>Cena: {prince} PLN</p>
            </div>
            <div className="col-6 text-center">
                <p>Sala: {hall.hall_number}</p>
                <p>Zajęte miejsca: {sold_tickets}/{hall.capacity}</p>


            </div>

            <div className="col-2 text-center">
                <diV className="m-1">
                    <Link to={'/ticket/' + pk}>
                        <Button >Kup Bilet</Button>
                    </Link>
                </diV>
                <div>
                    <Link to={'/movie/' + movie.pk}>
                        <Button>Szczegóły filmu</Button>
                    </Link>
                </div>
            </div>
        </div>

    </li>
)

export default SeanseItem;