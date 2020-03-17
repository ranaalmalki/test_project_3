import React from "react";
import TicketForm from "./TickectForm";

class NewTicket extends React.Component {
  constructor() {
    super();
    this.state = {
      TicketType: "",
      TicketDescription: "",
      TicketState: ""
    };
  }
  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  formAdd = e => {
    const newTicket = this.state;
    console.log(newTicket, " NewTicket");
    e.preventDefault();
    this.props.addTicket(newTicket);
  };

  formEdit = e => {
    const EditTicket = this.state;
    console.log(EditTicket, "EditTicket");
    e.preventDefault();
    this.props.addTicket(EditTicket);
  };
  render() {
    // const newTicket = this.state;

    return (
      <div>
        <TicketForm handleChange={this.handleChange} newTicket={this.newTicket} EditTicket={this.EditTicket} formAdd={this.formAdd}formEdit={this.formEdit}/>
      </div>
    );
  }
}
export default NewTicket;
