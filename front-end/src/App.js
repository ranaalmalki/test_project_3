import React from 'react';
import apiURL from'./APIconfig';
import Login from './components/login/Login'


// Components
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
<Login/>
       {/* <Tickets 
        Tickets={this.state.Tickets} 
        setTickets={this.setTickets}/> */}
      </div>
    );
  }
}
