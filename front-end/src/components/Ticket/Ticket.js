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
      <li className="event">
      <div className="member-infos">
        <h1
        onClick={this.TicketClicked}>
          {this.props.TicketState} <span  class="shots-number"> <button className="raise"> Close </button> </span>
        </h1>
        <div className={`DescriptionFltir-${this.state.Fltir}`}>
          <span>{this.props.TicketType}</span>
             <p>{this.props.TicketDescription}</p>
             </div>
      </div>
      </li>
    );
  }
}