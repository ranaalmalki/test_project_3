import React from 'react';
import apiURL from'./APIconfig';
import Login from './components/login/Login'

//CSS
import '../src/components/Ticket/Tickets.css'; 

// Components
import Tickets from './components/Ticket/Tickets'
import Login from './components/login/Login'



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
        {/* <Login/> */}
       <Tickets 
<Login/>
       {/* <Tickets 

        Tickets={this.state.Tickets} 
        setTickets={this.setTickets}/> */}
      </div>
    );
  }
}
