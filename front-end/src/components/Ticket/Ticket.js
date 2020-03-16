//Ticket
import React from 'react';


export default class Ticket extends React.Component{

  render(){
    return(
    <div>
        <h4> Type:  {this.props.TicketType} </h4>
        <sub> State:  {this.props.TicketState} </sub>
        <p> Description:  {this.props.TicketDescription} </p>
        --------------------------------------
    </div>);
  }

}