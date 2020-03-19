//ALL Received Tickets 
import React from 'react';
import ReceivedTicket from './ReceivedTicket'
import { getEmpSendTickets } from '../api';
import '../SendTicket/SendTickets.css'; 
import {getInfo} from '../login/decodeToken'

export default class ReceivedTickets extends React.Component{

    constructor(props){
        super(props)

        this.state = {
        Emp_ReceivedTickets:[], 
        };
      }

    componentDidMount(){
        let mId = getInfo().data._id

        // Mack API call 
        // getreceivedTickets("5e70bf444d6ce11c64e4e3ad")
        getEmpSendTickets(mId)
        .then( (reponse)=>{
            console.log('reponse.data' , reponse.data )
            this.setTickets(reponse.data)
        })
        .catch( (error)=>{
            console.log(' API error: ',error );
        })
    }

    setTickets = (Emp_ReceivedTickets) =>{
        this.setState( {Emp_ReceivedTickets} );
      }


   render(){
      let allTickets = <h3> No Tickets! :( </h3>

      if(this.state.Emp_ReceivedTickets.length > 0 ){
      allTickets= this.state.Emp_ReceivedTickets.map( (Tickets , index)=> {
          return(
          <ReceivedTicket 
          id={Tickets._id}
          TicketType={Tickets.TicketType}
          TicketState={Tickets.TicketState}
          TicketDescription={Tickets.TicketDescription}
          key={index} /> 
          );
      })}

    return(
        <div className="content">
            <h2>Received Ticket</h2>
            <ul className="TimeLineReceivedTickets">
            {allTickets}
        </ul>
        </div>);
  }

} 