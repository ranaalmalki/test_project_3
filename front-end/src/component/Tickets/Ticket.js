//Ticket
import React from 'react';


export default class Ticket extends React.Component{

  render(){
    return(
    <div>
        <h3> ID:  {this.props.id} </h3>
        <sub> Type:  {this.props.TicketType} </sub>
        <sub> State:  {this.props.TicketState} </sub>
        <p> Description:  {this.props.TicketDescription} </p>
        --------------------------------------
    </div>);
  }
  
}

