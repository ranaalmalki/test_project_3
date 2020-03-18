// EmpHeader
import React from 'react'
import './header.css';
import SendTickets from '../SendTicket/SendTickets'


export default class EmpHeader extends React.Component{
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
        <li><a href="">New Employee</a></li>
        <li><a href="">History</a></li>
        <li><a href="">Log out </a></li>
      </ul>
    </div>
  </div>
  <main>
    <div className="content">
    <SendTickets />
    </div>
  </main>
</div>
    )}
}

