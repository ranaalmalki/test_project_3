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
nave(e){
  e.preventDefault();
  this.props.history.push('/Login')
}
nave(e){
  e.preventDefault();
  this.props.history.push('/Login')
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
        <li><a onClick={e=> this.nave(e)}>History</a></li>
        <li onClick={e=> this.nave(e)} >Log out</li>
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