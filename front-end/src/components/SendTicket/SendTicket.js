// SendTicket
import React from 'react';

export default class SendTicket extends React.Component{

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

        <div className="card">
            <h1 onClick={this.TicketClicked}>
                {this.props.TicketState}
                <span className="shots-number"> 
                _{this.props.TicketType} </span>
           </h1>
           <div className={`Description-${this.state.Fltir}`}>
      <p>
          {this.props.TicketDescription}</p>
        <button className="raise"> Edit </button>  
      </div>

        </div>
    //   <li className="event">
    //   <div className="member-infos">


    //   </div>
    //   </li>

    );
  }

}
