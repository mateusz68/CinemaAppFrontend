import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Moment from 'react-moment';
import 'moment/locale/pl';

const SeanseManageListItem = props => {
    const { seanse, showEditForm, showDeleteForm } = props;
    return (
        <li className="list-group-item">
            <h5 className="text-center">Film: {seanse.movie.title}</h5>
            <div className="row">
                <div className="col-4">

                    <p>Data seansu: <Moment local format="D MMM YYYY HH:mm:ss">{seanse.date}</Moment></p>
                    <p><Moment local fromNow>{seanse.date}</Moment></p>
                    <p>Cena: {seanse.prince} PLN</p>
                </div>
                <div className="col-6 text-center">
                    <p>Sala: {seanse.hall.hall_number}</p>
                    <p>Zajęte miejsca: {seanse.sold_tickets}/{seanse.hall.capacity}</p>


                </div>

                <div className="col-2 text-center">
                    <Button className="m-2" onClick={() => showEditForm(seanse)} variant="warning">Edytuj</Button>
                    <Button className="m-2" onClick={() => showDeleteForm(seanse)} variant="danger">Usuń</Button>
                </div>
            </div>

        </li>
    )
}

export default SeanseManageListItem;