//AdminHeader
import React from 'react'
import './header.css';
import Tickets from '../Ticket/Tickets'
import { getAllTicket } from '../api';
export default class AdminHeader extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    history:null,
    };
  }
componentDidMount(){
    // Mack API call 
    getAllTicket()
    .then( (reponse)=>{
        console.log('reponse.data' , reponse.data )
        const history = reponse.data.filter((Ticket) => {
            if(Ticket.TicketState === 'closed'){
                return reponse.data
            }
          });this.setState( {history} );
    })
    .catch( (error)=>{
        console.log(' API error: ',error );
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
        <li><a href="">New Employee</a></li>
        <li><a href="">History</a></li>
        <li><a href="">Log out </a></li>
      </ul>
    </div>
  </div>
  <main>
    <div className="content">
    <Tickets />
    </div>
  </main>
</div>
    )}
}