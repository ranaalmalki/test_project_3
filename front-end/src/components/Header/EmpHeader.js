// EmpHeader
import React from 'react'
import './header.css';
import SendTickets from '../SendTicket/SendTickets'
import ReceivedTickets from '../ReceivedTickets/ReceivedTickets'
export default class EmpHeader extends React.Component{


  logOut= e =>{
    e.preventDefault();
    this.props.history.push('/Login')
    localStorage.clear('currentUser')
  }
    render(){
    return (
<div className="page">
  
  <header tabindex="0">Enjaz</header>
  <div className="nav-container">
    <div className="bg"></div>
    
    <div className="button" tabindex="0">
      
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>

    </div>
    <div className="nav-content" tabindex="0">
      <ul>

        <li onClick={e => this.logOut(e)}>LogOut</li>
        <li><a href="/Login">New Ticket</a></li>
        <li><a href="/Login">New Ticket</a></li>
        <li><a href="/Login">New Ticket</a></li>
        <li><a href="/Login">New Ticket</a></li>


    </ul>
    </div>
  </div>
  <main>
    <div className="container-SendTickets">
    <SendTickets />
    </div>
    <div className="container-ReceivedTickets">
    <ReceivedTickets />
    </div>
  </main>
</div>
    )}
}