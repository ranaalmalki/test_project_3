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
  TicketClicked = () => {
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


