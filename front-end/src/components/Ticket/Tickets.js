//ALL Ticket
import React from 'react';
import Ticket from './Ticket'
import { getAllTicket } from '../api';
import './Tickets.css'; 
export default class Tickets extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          Tickets:[], 
        };
      }
      setTickets = (Tickets) =>{
        this.setState( {Tickets} );
      }
    componentDidMount(){
        // Mack API call 
        getAllTicket()
        .then( (reponse)=>{
            console.log('reponse.data.Tickets' , reponse.data )
            this.setTickets(reponse.data)
        })
        .catch( (error)=>{
            console.log(' API error: ',error );
        })
    }
  render(){
      let allTickets = <h3> No Tickets! :( </h3>
      if(this.state.Tickets.length > 0 ){
      allTickets= this.state.Tickets.map( (Tickets , index)=> {
          return(
          <Ticket 
          id={Tickets._id}
          TicketType={Tickets.TicketType}
          TicketState={Tickets.TicketState}
          TicketDescription={Tickets.TicketDescription}
          key={index} /> 
          );
      })}
    return(
        // <>
        // <h1> All Tickets.. </h1>
        // {allTickets}
        // </>);
        <div className="content">
            <h1>ALL Tickets</h1>
        <ul className="timeline">
            {allTickets}
        </ul>
        </div>);
  }
}