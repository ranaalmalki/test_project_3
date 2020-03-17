import React from 'react';
import apiURL from'./APIconfig';
import NewEmployee from './components/manager/NewEmployee';
import Manager from './components/manager/Manager';
// Components
import Tickets from './components/Ticket/Tickets'
import Login from './components/login/Login'
import SendTickets from './components/Emp_SendTickets/SendTickets'
export default class App extends React.Component {
  render(){
    console.log('MY API :  ',apiURL);
    return (
      <>
        <SendTickets />
        {/* <Login/>
       <Tickets 
        Tickets={this.state.Tickets} 
        setTickets={this.setTickets}/> */}
        {/* <NewEmployee /> */}
        {/* <Manager/>  */}
      </>
    );
  }
}