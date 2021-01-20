import React from 'react';
import * as MovieApi from './../api/MovieApi';
import { Button } from 'react-bootstrap';
import Select from 'react-select';
import MovieDetails from './../components/MovieDetails/MovieDetails';
import './BuyTicket.css';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Moment from 'react-moment';
import 'moment/locale/pl';

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
      });
  }

  handleChange = selectedOption => {
    this.setState((prevState) => {
      let prev = prevState.selectedOption;
      prev = selectedOption
      return { selectedOption: prev };
    })
  };

  createNotification(message, type) {
    switch (type) {
      case "SUCCESS":
        NotificationManager.success('Success', message);
        break;
      case "ERROR":
        NotificationManager.error('Error', message);
        break;
      default:
        break;
    }
  }

  buyTicketClick() {
    if (this.state.selectedOption != null) {
      const body = {
        "seanse": this.state.seanse.pk,
        "seat": Number(this.state.selectedOption.value)
      }
      MovieApi.addTicket(body)
        .then(response => {
          if (response.status === 201) {
            this.createNotification('Rezerwacja złożona pomyślnie.', "SUCCESS");
            this.setState(prevState => {
              var prev_avaliable = prevState.available_seats;
              var index = prevState.available_seats.findIndex((obj => obj.value === body.seat.toString()));
              if (index > -1) {
                prev_avaliable.splice(index, 1);
              }
              return {
                busy_seats: [...prevState.busy_seats, body.seat],
                available_seats: prev_avaliable,
                selectedOption: null,
              };
            });
          } else {
            this.createNotification("Nie udało się złżożyć rezerwacji", "ERROR");
          }
        });
    }
  }

  render() {
    const { selectedOption } = this.state;
    let myButton;
    if (Date.parse(this.state.seanse.date) >= new Date()) {
      myButton = <Button onClick={() => this.buyTicketClick()}>Kup Bilet</Button>
    } else {
      myButton = <div><Button onClick={() => this.buyTicketClick()} disabled>Kup Bilet</Button><p>Nie można zakupić biletu na ten seans!</p></div>
    }
    return (
      <div className="mb-5">
        <h1 className="text-center">Zakup bilet na film</h1>
        <div className="mb-4 mt-4">
          <MovieDetails movie={this.state.seanse.movie} />
        </div>
        <div className="mt-3">
          <h4>Seans:</h4>
          <p>Data: <Moment local format="D MMM YYYY HH:mm:ss">{this.state.seanse.date}</Moment></p>
          <p>Sala nr.{this.state.seanse.hall.hall_number}</p>
          <p>Cena biletu: {this.state.seanse.prince} PLN</p>
        </div>
        <div>
          <h4>Plan sali:</h4>
          <img className="img-fluid" src={this.state.seanse.hall.seats_image} alt="Hall plan" />
          <p className="busy_seats">Zajęte miejsca : {this.state.busy_seats.map(item => {
            return "[" + item + "], ";
          })}</p>
          <h4>Wybierz swoje miejsce:</h4>
          <Select
            value={selectedOption}
            onChange={this.handleChange}
            options={this.state.available_seats}
          />
          <NotificationContainer />
          <div className="text-center mt-2">
            {myButton}
          </div>
        </div>
      </div>
    )
  }
}

export default BuyTicket;