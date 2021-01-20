import React, { Component } from 'react';
import * as Icon from "react-bootstrap-icons";
import { Button } from 'react-bootstrap';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import './EditForm.css';
import moment from 'moment-timezone';
import 'moment/locale/pl';
import 'moment';
import Select from 'react-select';
import PropTypes from 'prop-types';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editDate: props.seanse.date,
            editMovie: props.seanse.movie,
            editHall: props.seanse.hall,
            editPrince: props.seanse.prince,
            halls: props.halls,
            movies: props.movies,
            selectedMovie: null,
            selectedHall: null,
            moviesOptions: [],
            hallOptions: []
        }
    }

    componentDidMount() {
        var moviesOpt = [];
        this.state.movies.map(movie =>
            moviesOpt.push({ value: movie.pk, label: movie.title })
        );
        var hallsOpt = [];
        this.state.halls.map(hall =>
            hallsOpt.push({ value: hall.pk, label: "Sala nr." + hall.hall_number })
        );
        var movie = moviesOpt.filter(obj => {
            return Number(obj.value) === this.state.editMovie.pk
        });
        var hall = hallsOpt.filter(obj => {
            return Number(obj.value) === this.state.editHall.pk
        });
        this.setState({
            selectedMovie: movie[0],
            selectedHall: hall[0],
            moviesOptions: moviesOpt,
            hallOptions: hallsOpt,
        })
    }

    onChange(e) {
        var name = e.target.id;
        this.setState({
            [name]: e.target.value
        })
    }

    onChangeDate(e) {
        var date = e.toDate();
        date = moment(date).format("yyyy-MM-DDTHH:mm:ssZ");
        this.setState({
            editDate: date
        })
    }

    handleMovieChange = selectedMovie => {
        this.setState((prevState) => {
            var prev = prevState.selectedMovie;
            prev = selectedMovie;
            var newMovie = prevState.movies.filter(obj => {
                return Number(obj.pk) === selectedMovie.value
            });
            return {
                selectedMovie: prev,
                editMovie: newMovie[0],
            };
        })
    };

    handleHallChange = selectedHall => {
        this.setState((prevState) => {
            var prev = prevState.selectedHall;
            prev = selectedHall;
            var newHall = prevState.halls.filter(obj => {
                return Number(obj.pk) === selectedHall.value
            });
            return {
                selectedHall: prev,
                editHall: newHall[0],
            };
        })
    };

    FormatDate() {
        var date = moment(this.props.seanse.date);
        return date;
    }

    render() {
        const { seanse, editSeanse, onClose } = this.props;
        const { selectedMovie, selectedHall } = this.state;
        return (
            <div className="alertForm bg-secondary text-white rounded p-3">
                <span className="closeButton">
                    <Icon.XCircleFill color="white" size={18} onClick={() => onClose()} />
                </span>
                <div className="form-group">
                    <label>Data</label>
                    <Datetime className="datepicker" dateFormat={true} initialValue={this.FormatDate()} locale="pl" onChange={(e) => this.onChangeDate(e)} />
                </div>
                <div className="form-group">
                    <label>Film</label>
                    <Select className="datepicker" value={selectedMovie} onChange={this.handleMovieChange} options={this.state.moviesOptions} />
                </div>
                <div className="form-group">
                    <label>Sala</label>
                    <Select className="datepicker" value={selectedHall} onChange={this.handleHallChange} options={this.state.hallOptions} />
                </div>
                <div className="form-group">
                    <label>Cena</label>
                    <input type="number" className="form-control" id="editPrince" defaultValue={seanse.prince} style={{ border: 'none' }} onChange={(e) => this.onChange(e)} />
                </div>
                <div className="text-center">
                    <Button variant="primary" onClick={() => editSeanse(seanse, this.state,)}>Zapisz</Button>
                </div>
            </div>
        );
    }
}

EditForm.propTypes = {
    seanse: PropTypes.object.isRequired,
    editSeanse: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}

export default EditForm;
