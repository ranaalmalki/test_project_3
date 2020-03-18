//AdminHeader
import React from "react";
import "./header.css";
import Tickets from "../Ticket/Tickets";
import { getAllTicket } from "../api";
import NewEmployee from "../manager/NewEmployee";
import { Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";

export default class AdminHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: null,
      Fltir:"none",
      FltirTicket:"display"
    };
  }
<<<<<<< HEAD
  componentDidMount() {
    // Mack API call
=======

componentDidMount(){
    // Mack API call 
>>>>>>> f56bff5df239050a02f8845fad5d7adcb8f3b23f
    getAllTicket()
      .then(reponse => {
        console.log("reponse.data", reponse.data);
        const history = reponse.data.filter(Ticket => {
          if (Ticket.TicketState === "closed") {
            return reponse.data;
          }
        });
        this.setState({ history });
      })
      .catch(error => {
        console.log(" API error: ", error);
      });
  }
  TicketClicked = (e) => {
    if( this.state.Fltir === 'none'){
       this.setState({ 
         Fltir: 'display',
         FltirTicket:'none'
        }); 
    }
    else{
        this.setState({ Fltir:'none' ,
        FltirTicket:'display'}); 
    }
}
AddClicked = () => {
  if( this.state.FltirTicket === 'display'){
     this.setState({ 
      FltirTicket:'none', 
      Fltir: 'display'}); 
  }
  else{
      this.setState({ FltirTicket:'display',
      Fltir: 'none' }); 
  }
}
<<<<<<< HEAD
  render() {
    return (
      <div className="page">
        <header tabindex="0">Enjaz</header>
          <div className="nav-container">
            <div className="bg"></div>
            <div className="button" tabindex="0">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </div>

            <div className="nav-content" tabindex="0">
              <ul>
                  <li onClick={this.TicketClicked}>NewEmployee</li>

                <li>
                  <a href="">History</a>
                </li>
                <li>
                  <a href="">Log out </a>
                </li>
              </ul>
            </div>
          </div>
          <main>
            <div className="content">
              <div className={`Tickets-${this.state.FltirTicket}`}>
              <Tickets />
              </div>
<div className={`NewEmployee-${this.state.Fltir}`}>
  <NewEmployee AddClicked={this.AddClicked}/>
=======
nave(e){
  e.preventDefault();
  this.props.history.push('/Login')
}
nave(e){
  e.preventDefault();
  this.props.history.push('/Login')
}
    render(){
    return (
<div className="page">
  <header tabindex="0">Enjaz</header>
  <div className="nav-container">
    <div className="bg"></div>
    <div className="button" tabindex="0">
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
      <span className="icon-bar"></span>
    </div>
    <div className="nav-content" tabindex="0">
      <ul>
        <li><a href="">New Employee</a></li>
        <li><a onClick={e=> this.nave(e)}>History</a></li>
        <li onClick={e=> this.nave(e)} >Log out</li>
      </ul>
    </div>
  </div>
  <main>
    <div className="content">
    <Tickets />
    </div>
  </main>
>>>>>>> f56bff5df239050a02f8845fad5d7adcb8f3b23f
</div>
            </div>
          </main>
      </div>
    );
  }
}
