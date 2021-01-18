import React from 'react';
import * as MovieApi from './../api/MovieApi'
import SeanseList from './../components/SeansesList/SeansesList'

class Home extends React.Component{
    state = {
      seanses: [],
    }
  
    componentDidMount(){

      MovieApi.getAllSeanses()
      .then(response =>{
        this.setState({
          seanses: response,
        })
      })
      
        
    }
    render(){
      return(
        <diV className="mb-5">
         <h1>Wszystkie seanse</h1>
        <SeanseList items={this.state.seanses} />
  </diV>
      )
    }
  }
  
  export default Home;
  