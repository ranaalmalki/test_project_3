import React from 'react';
import Transaction from './component/transaction/transaction'
import Register from './component/Login/Register';
import LogIn from './component/Login/LogIn'
import Tickets from './component/Tickets/Tickets'
import './App.css';

import apiURL from'./APIconfig';

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
      setTickets={this.setTickets} />
      {/* <Transaction /> */}
      {/* <Register/> */}
      {/* <LogIn /> */}
    </div>
  );
}}