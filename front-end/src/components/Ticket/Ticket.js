//Ticket
import React from 'react';


export default class Ticket extends React.Component{

  render(){
    return(
    <div>
        <sub> Type:  {this.props.TicketType} </sub>
        <sub> State:  {this.props.TicketState} </sub>
        <p> Description:  {this.props.TicketDescription} </p>
        --------------------------------------
    </div>);
  }

}