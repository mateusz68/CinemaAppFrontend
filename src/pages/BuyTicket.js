import React from 'react';
import * as MovieApi from './../api/MovieApi';
import { Button } from 'react-bootstrap';
import Select from 'react-select';
import MovieDetails from './../components/MovieDetails/MovieDetails';
import './BuyTicket.css';
import { useHistory } from 'react-router-dom';

class BuyTicket extends React.Component {
  state = {
    seanse: {
      date: "",
      movie: {
        pk: "",
        title: "",
        duration: "",
        cover: "",
      },
      hall: {
        hall_number: "",
        capacity: "",
        seats_image: "",
      },
      prince: "",
    },
    busy_seats: [],
    available_seats: [
      { value: '', label: '' },
    ],
    selectedOption: null,
  }

  componentDidMount() {
    MovieApi.getTicketDetails(this.props.match.params.id)
      .then(response => {
        this.setState({
          seanse: response.seanse,
          busy_seats: response.busy_seats,
          available_seats: response.available_seats
        })
      })
  }

  handleChange = selectedOption => {
    this.setState((prevState) => {
      let prev = prevState.selectedOption;
      prev = selectedOption
      return { selectedOption: prev };
    })
  };

  buyTicketClick() {
    if (this.state.selectedOption != null) {
      const body = {
        "seanse": this.state.seanse.pk,
        "seat": Number(this.state.selectedOption.value)
      }
      MovieApi.addTicket(body)
      .then(response => {
        if (response.status === 204) {
          window.alert("Rezerwacja złożona pomyślnie");
          this.props.history.push('/');
        }else{
          window.alert("Nie udało się łżożyć rezerwacji");
        }
      });
      
    }

  }
  render() {
    const { selectedOption } = this.state;
    return (
      <div className="mb-5">
        <h1 className="text-center">Zakup bilet na film</h1>
        <div className="mb-4 mt-4">
          <MovieDetails movie={this.state.seanse.movie} />
        </div>
        <div className="mt-3">
          <h4>Seans:</h4>
          <p>Data: {this.state.seanse.date}</p>
          <p>Sala nr.{this.state.seanse.hall.hall_number}</p>
          <p>Cena biletu: {this.state.seanse.prince} PLN</p>
        </div>
        <div>
          <h4>Plan sali:</h4>
          <img className="img-fluid" src={this.state.seanse.hall.seats_image} />
          <p className="busy_seats">Zajęte miejsca : {this.state.busy_seats.map(item => {
            return "[" + item + "], ";
          })}</p>
          <h4>Wybierz swoje miejsce:</h4>
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={this.state.available_seats}
          />

          <div className="text-center mt-2">
            <Button onClick={() => this.buyTicketClick()}>Kup Bilet</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default BuyTicket;