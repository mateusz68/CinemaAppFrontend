import React from 'react';
import { Button } from 'react-bootstrap';

const MovieManageListItem = ({
    movie,
    showEditForm,
    showDeleteForm
}) => (
    <li className="list-group-item">
        <div className="row">
            <div className="col-4">
                <img className="coverimage" src={movie.cover} alt="Movie cover" />
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