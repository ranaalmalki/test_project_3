//articles
import React from 'react';
import Ticket from './Ticket'
import { getAllTicket } from '../api';

export default class Tickets extends React.Component{

    componentDidMount(){
        // Mack API call 
        getAllTicket()
        .then( (reponse)=>{
            console.log('reponse.data.Tickets' , reponse.data )
            this.props.setTickets(reponse.data)
        })
        .catch( (error)=>{
            console.log(' API error: ',error );
        })
    }


  render(){
      let allTickets = <h3> No Tickets! :( </h3>

      if(this.props.Tickets.length > 0 ){
      allTickets= this.props.Tickets.map( (Tickets , index)=> {
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
        <>
        <h1> All Tickets.. </h1>
        {allTickets}
        </>);
  }
  
}