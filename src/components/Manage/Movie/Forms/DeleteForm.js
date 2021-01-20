import React from 'react';
import { Button } from 'react-bootstrap';
import * as Icon from "react-bootstrap-icons";
import PropTypes from 'prop-types';

const DeleteForm = (props) => {
    const { deleteMovie, onClose, movie } = props;
    return (
        <div className="alertForm bg-secondary text-white rounded p-3">
            <span className="closeButton">
                <Icon.XCircleFill color="white" size={18} onClick={() => onClose()} />
            </span>
            <div>
                <Icon.Info size={60} color="white" />
                Czy napewno chcesz usunąć ten film?
            </div>
            <div className="text-center">
                <Button variant="primary" className="m-2" onClick={() => onClose()}>Nie</Button>
                <Button variant="danger" className="m-2"
                    onClick={() => {
                        deleteMovie(movie.pk);
                        onClose();
                    }}>Tak</Button>
            </div>
        </div>
    );
};
                
DeleteForm.propTypes = {
    deleteMovie : PropTypes.func.isRequired,
    onClose : PropTypes.func.isRequired,
    movie : PropTypes.object.isRequired
}

export default DeleteForm;
