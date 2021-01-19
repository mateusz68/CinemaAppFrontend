import React from 'react';
import * as MovieApi from './../api/MovieApi'
import SeanseList from './../components/SeansesList/SeansesList'
import moment from 'moment-timezone';
import 'moment/locale/pl';
import 'moment';
import Datetime from 'react-datetime';

class Home extends React.Component {
  state = {
    seanses: [],
  }

  componentDidMount() {
    this.getSeanses(new Date());
  }

  getSeanses = (date) => {
    var formatDate = moment(date).toISOString();
    MovieApi.getSeansesByDate(formatDate)
      .then(response => {
        this.setState({
          seanses: response,
        })
      });
  }

  onChangeDate(e) {
    var date = e.toDate();
    this.getSeanses(date);
  }

  render() {
    return (
      <div className="mb-5">
        <div className="text-center m-5">
          <h1>Seanse</h1>
          <h5>Wybierz datę dla której chcesz wyświetlić seanse</h5>
          <Datetime dateFormat={true} timeFormat={false} initialValue={new Date()} locale="pl" onChange={(e) => this.onChangeDate(e)} />
        </div>
        <SeanseList items={this.state.seanses} />
      </div>
    )
  }
}

export default Home;
