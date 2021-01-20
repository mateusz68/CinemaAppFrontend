import React from 'react';
import * as MovieApi from './../api/MovieApi'
import MovieManageList from './../components/Manage/Movie/MovieManageList'
import { Button } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import EditForm from './../components/Manage/Movie/Forms/EditForm'
import DeleteForm from './../components/Manage/Movie/Forms/DeleteForm'
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class ManageMovies extends React.Component {
  state = {
    movies: []
  }

  componentDidMount() {
    MovieApi.getAllMovies()
      .then(response => {
        this.setState({
          movies: response,
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
    const movie = {
      title: "",
      duration: 0,
      cover: "",
      description: ""
    };
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div>
            <EditForm movie={movie} onClose={onClose} editMovie={this.addMovie} />
            <NotificationContainer />
          </div>
        );
      }
    });
  }

  addMovie = (movie, s) => {
    var body = {
      "title": s.editTitle,
      "duration": Number(s.editDuration),
      "cover": s.editCover,
      "description": s.editDescription,
    }
    var messages = this.validateForm(body);
    if (messages.length === 0) {
      MovieApi.addMovie(body)
        .then(response => {
          if (response.status === 201) {
            this.createNotification('Film dodany porpawnie.', "SUCCESS");
            body["pk"] = response.data.pk
            this.setState(state => {
              return { movies: [...state.movies, body] };
            });

          }
        });

    }
    else {
      for (let i = 0; i < messages.length; i++)
        this.createNotification(messages[i], "ERROR");
    }
  }


  showEditForm = (movie) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div>
            <EditForm movie={movie} onClose={onClose} editMovie={this.editMovie} />
            <NotificationContainer />
          </div>
        );
      }
    });
  }

  editMovie = (movie, s) => {

    var body = {
      "pk": movie.pk,
      "title": s.editTitle,
      "duration": Number(s.editDuration),
      "cover": s.editCover,
      "description": s.editDescription,
    }
    var messages = this.validateForm(body);
    if (messages.length === 0) {
      MovieApi.editMovie(movie.pk, body)
        .then(response => {
          if (response.status === 200) {
            this.createNotification('Edycja zakończona poprawnie.', "SUCCESS");
            this.setState((prevState) => {
              let prev = prevState.movies;
              let index = prev.findIndex((obj => obj.pk === movie.pk));
              prev[index] = body;
              return { movies: prev };
            })
          }
        });

    }
    else {
      for (let i = 0; i < messages.length; i++)
        this.createNotification(messages[i], "ERROR");
    }
  }

  validateForm = (movie) => {
    var messages = [];

    if (movie.title === "") {
      messages.push("Tytuł filmu jest wymagany");
    }

    if (movie.title.length > 100) {
      messages.push("Tytuł może mieć maksymalnie 100 znaków");
    }

    if (movie.description === "") {
      messages.push("Opis nie może być pusty");
    }

    if (movie.description.length > 3000) {
      messages.push("Opis jest za długi");
    }

    if (movie.cover === "") {
      messages.push("Okładka nie może być pusta");
    }

    if (movie.duration === "") {
      messages.push("Czas trwania nie może być pusty");
    }
    if (movie.duration <= 0) {
      messages.push("Czas trwania musi być większy od 0");
    }
    return messages;
  }

  showDeleteForm = (movie) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <DeleteForm movie={movie} onClose={onClose} deleteMovie={this.deleteMovie} />
        );
      }
    });
  }

  deleteMovie = (id) => {
    MovieApi.deleteMovie(id)
      .then(response => {
        if (response.status === 204) {
          this.createNotification('Film usunięty poprawnie.', "SUCCESS");
          this.setState((prevState) => {
            let prev = prevState.movies;
            let index = prev.findIndex((obj => obj.pk === id));
            if (index > -1) {
              prev.splice(index, 1);
            }
            return { movies: prev };
          })
        }
      });
  }

  render() {
    return (
      <div>
        <div className="text-center">
          <h1>Zarządzaj Filmami</h1>
          <Button className="m-2" variant="success" onClick={() => this.showAddForm()}>Dodaj nowy</Button>
          <MovieManageList movies={this.state.movies} showEditForm={this.showEditForm} showDeleteForm={this.showDeleteForm} />
          <NotificationContainer />
        </div>
      </div>
    )
  }
}

export default ManageMovies;

