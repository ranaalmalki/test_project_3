import React from 'react';
import apiURL from'./APIconfig';


// Import
import Tickets from './components/Ticket/Tickets'
export default class App extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      Tickets:[], 
    };
    console.log('MY API :  ',apiURL);

  }

  setTickets = (Tickets) =>{
    this.setState( {Tickets} );
  }


  render(){
    return (
      <div>
        <p> Welcome :) ! </p>
       <Tickets 
        Tickets={this.state.Tickets} 
        setTickets={this.setTickets}/>
      </div>
    );
  }
}
