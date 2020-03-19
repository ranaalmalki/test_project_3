// EmpHeader
import React from 'react'
import './header.css';
import SendTickets from '../SendTicket/SendTickets'
import ReceivedTickets from '../ReceivedTickets/ReceivedTickets'
import NewTicket from '../NewTicket/NewTicket';
import { getInfo } from "../login/decodeToken";
import { AddNewTicket } from "../api";

  logOut= e =>{
    e.preventDefault();
    this.props.history.push('/Login')
    localStorage.clear('currentUser')
  }
  togglehandler(e){
    e.preventDefault();

    this.setState({
      toggle:true
    })
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
  {this.state.toggle===false?

  <main>

    <div className="container-SendTickets">
    <SendTickets />
    </div>
    <div className="container-ReceivedTickets">
    <ReceivedTickets />
    </div>
  </main>

:<NewTicket addTicket={this.addTicket} />
    }
</div>
    );
  }
}