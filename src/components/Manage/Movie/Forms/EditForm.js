import React, { Component } from 'react';
import * as Icon from "react-bootstrap-icons";
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editTitle: props.movie.title,
            editDescription: props.movie.description,
            editDuration: props.movie.duration,
            editCover: props.movie.cover
        }
    }

    onChange(e) {
        var name = e.target.id;
        this.setState({
            [name]: e.target.value
        })
    }

    render() {
        const { movie, editMovie, onClose } = this.props;
        return (
            <div className="alertForm bg-secondary text-white rounded p-3">
                <span className="closeButton">
                    <Icon.XCircleFill color="white" size={18} onClick={() => onClose()} />
                </span>
                <div className="form-group">
                    <label>Tytuł</label>
                    <input className="form-control" type="text" id="editTitle" defaultValue={movie.title} style={{ border: 'none' }} onChange={(e) => this.onChange(e)} />
                </div>
                <div className="form-group">
                    <label>Czas Trwania</label>
                    <input className="form-control" type="number" id="editDuration" defaultValue={movie.duration} style={{ border: 'none' }} onChange={(e) => this.onChange(e)} />
                </div>
                <div className="form-group">
                    <label>Okładka</label>
                    <input className="form-control" type="text" id="editCover" defaultValue={movie.cover} style={{ border: 'none' }} onChange={(e) => this.onChange(e)} />
                </div>
                <div className="form-group">
                    <label>Opis</label>
                    <textarea className="form-control" id="editDescription" defaultValue={movie.description} style={{ border: 'none' }} cols="50" rows="10" onChange={(e) => this.onChange(e)} />
                </div>
                <div className="text-center">
                    <Button variant="primary" onClick={() => editMovie(movie, this.state)}>Zapisz</Button>
                </div>
            </div>
        );
    }
}

EditForm.propTypes = {
    movie: PropTypes.object.isRequired,
    editMovie: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}

export default EditForm;
