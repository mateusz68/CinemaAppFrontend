import React from 'react';
import * as MovieApi from './../../api/MovieApi';
import { Line } from 'react-chartjs-2'
import PropTypes from 'prop-types';


const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

class MoviePopularity extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Liczba sprzedanych biletów',
            data: [],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      },
      isLoaded: false,
    }
  }
  chart = React.createRef();

  componentDidMount() {
    MovieApi.getMoviePopularity(this.props.id)
      .then(response => {
        var dataApi = response;
        this.setState((prevState) => {
          let prevData = prevState.data;
          prevData.labels = dataApi.days;
          prevData.datasets[0].data = dataApi.value;
          return {
            isLoaded: true,
            data: prevData
          };
        })
      })
  }
  render() {
    return (
      <div>
        <div>
          <h1>Popularnośc filmu</h1>
        </div>
        {this.state.isLoaded ? <Line data={this.state.data} options={options} redraw /> : <p>Ładowanie... </p>}

      </div>
    )
  }
}

MoviePopularity.propTypes = {
  movie: PropTypes.object
}

export default MoviePopularity;
