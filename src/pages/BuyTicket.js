import React from 'react';
import * as MovieApi from './../api/MovieApi'
import SeanseList from './../components/SeansesList/SeansesList'

class BuyTicket extends React.Component{
    state = {
      seanse: {
        date:"",
        movie:{
          pk:"",
          title:"",
          duration:"",
          cover:"",
        },
        hall: {
          hall_number:"",
          capacity:"",
          seats_image:"",
        },
        prince:"",
      },
      seats: []
    }
  
    componentDidMount(){
      MovieApi.getTicketDetails(this.props.match.params.id)
      .then(response =>{
        console.log(response);
        this.setState({
          seanse: response.seanse,
          seats: response.seats
        })
      })
      
        
    }
    render(){
      return(
        <diV>
         <h1 className="text-center">Zakup bilet na seans</h1>
         <div className="row">
         <div className="col-4 text-center">
                    <img className="img-fluid" src={this.state.seanse.movie.cover}/>
                    </div>
         </div>
         <div>
         <img className="img-fluid" src={this.state.seanse.hall.seats_image}/>
           <p>Zajęte miejsca : {this.state.seats.map(item => {
             return "[" + item +"], ";
           })}</p>
         </div>
  </diV>
      )
    }
  }
  
  export default BuyTicket;