import React from 'react';
import * as MovieApi from './../api/MovieApi'
import SeanseManageList from './../components/Manage/Seanses/SeanseManageList'
import { Button } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import EditForm from './../components/Manage/Seanses/Forms/EditForm'
import DeleteForm from './../components/Manage/Seanses/Forms/DeleteForm'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import moment from 'moment-timezone';
import 'moment/locale/pl';
import 'moment';

class ManageSeanses extends React.Component {
  state = {
    seanses: [],
    movies: [],
    halls: [],
  }

  componentDidMount() {
    MovieApi.getAllSeanses()
      .then(response => {
        this.setState({
          seanses: response,
        });
      });
    MovieApi.getAllMovies()
      .then(response => {
        console.log(response)
        this.setState({
          movies: response,
        });
      });
    MovieApi.getAllHalls()
      .then(response => {
        console.log(response)
        this.setState({
          halls: response,
        });
      });
  }

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

  showAddForm = () => {
    const seanse = {
      "date": "",
      "movie": 0,
      "hall": "",
      "prince": ""
    };
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div>
            <EditForm seanse={seanse} onClose={onClose} editSeanse={this.addSeanse} halls={this.state.halls} movies={this.state.movies} />
          </div>
        );
      }
    });
  }

  formatDate = (date) => {
    var outDate = moment(date);
    return moment(date).format("yyyy-MM-DDTHH:mm:ssZ")
  }
  addSeanse = (seanse, s) => {
    var body = {
      "date": s.editDate,
      "movie": s.editMovie.pk,
      "hall": s.editHall.pk,
      "prince": Number(s.editPrince),
    }
    var messages = this.validateEditForm(body);
    if (messages.length === 0) {
      MovieApi.addSeanse(body)
        .then(response => {
          if (response.status === 201) {
            body["pk"] = response.data.pk;
            body.movie = s.editMovie;
            body.hall = s.editHall;
            this.setState(state => {
              var prev = state.seanses;
              prev.push(body);
              return { seanses: prev };
            });

          }
        });
    }
    else {
      for (let i = 0; i < messages.length; i++)
        window.alert(messages[i]);
    }
  }


  showEditForm = (seanse) => {
    console.log(seanse);
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div>
            <EditForm seanse={seanse} onClose={onClose} editSeanse={this.editSeanse} halls={this.state.halls} movies={this.state.movies} />
            <NotificationContainer />
          </div>
        );
      }
    });
  }

  editSeanse = (seanse, s) => {
    var body = {
      "pk": seanse.pk,
      "date": s.editDate,
      "movie": s.editMovie.pk,
      "hall": s.editHall.pk,
      "prince": Number(s.editPrince),
    }
    var messages = this.validateEditForm(body);
    if (messages.length === 0) {
      MovieApi.editSeanse(seanse.pk, body)
        .then(response => {
          if (response.status === 200) {
            this.createNotification('Edycja zakończona poprawnie.', "SUCCESS");
            this.setState((prevState) => {
              body.movie = s.editMovie;
              body.hall = s.editHall;
              let prev = prevState.seanses;
              let index = prev.findIndex((obj => obj.pk == seanse.pk));
              prev[index] = body;
              return { seanses: prev };
            })
          }
        });

    }
    else {
      for (let i = 0; i < messages.length; i++)
        this.createNotification(messages[i], "ERROR");
    }
  }

  validateEditForm = (seanse) => {
    var messages = [];

    // if (movie.title === "") {
    //   messages.push("Tytuł filmu jest wymagany");
    // }

    // if (movie.title.length > 100) {
    //   messages.push("Tytuł może mieć maksymalnie 100 znaków");
    // }

    // if (movie.description === "") {
    //   messages.push("Opis nie może być pusty");
    // } 

    // if (movie.description.length > 3000) {
    //   messages.push("Opis jest za długi");
    // }

    // if (movie.cover === "") {
    //     messages.push("Okładka nie może być pusta");
    //   } 

    //   if (movie.duration === "") {
    //     messages.push("Czas trwanai nie może być pusty");
    //   } 

    return messages;
  }

  showDeleteForm = (seanse) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <DeleteForm seanse={seanse} onClose={onClose} deleteSeanse={this.deleteSeanse} />
        );
      }
    });
  }

  deleteSeanse = (id) => {
    MovieApi.deleteSeanse(id)
      .then(response => {
        if (response.status === 204) {
          this.createNotification('Seans usunięty poprawnie.', "SUCCESS");
          this.setState((prevState) => {
            let prev = prevState.seanses;
            let index = prev.findIndex((obj => obj.pk == id));
            if (index > -1) {
              prev.splice(index, 1);
            }
            return { seanses: prev };
          })
        }
      });
  }

  render() {
    return (
      <div>
        <div className="text-center">
          <h1>Zarządzaj Seansami</h1>
          <Button className="m-2" variant="success" onClick={() => this.showAddForm()}>Dodaj nowy</Button>
          <SeanseManageList seanses={this.state.seanses} showEditForm={this.showEditForm} showDeleteForm={this.showDeleteForm} />
        </div>
      </div>
    )
  }
}

export default ManageSeanses;
