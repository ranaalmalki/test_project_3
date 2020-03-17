//Ticket
import React from 'react';
export default class Ticket extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      Fltir:'none', 
    };
  }
  // To display or not the ticket description  
  TicketClicked = (e) => {
     if( this.state.Fltir === 'none'){
        this.setState({ 
          Fltir:'display', }); 
     }
     else{
         this.setState({ Fltir:'none' }); 
     }
}
  render(){
    return(
  //     <div>
  //     <h4> Type:  {this.props.TicketType} </h4>
  //     <sub> State:  {this.props.TicketState} </sub>
  //     <p> Description:  {this.props.TicketDescription} </p>
  //     --------------------------------------
  // </div>);
      <li className="event">
      <div className="member-infos">
        <h1
        onClick={this.TicketClicked}>
          {this.props.TicketState} <span class="shots-number"> {this.props.TicketType} </span>
        </h1>
        <h2 className={`DescriptionFltir-${this.state.Fltir}`}>
          {this.props.TicketDescription}</h2>
      </div>
      </li>
    );
  }
}