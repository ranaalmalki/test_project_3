import React from "react";

class TicketForm extends React.Component {
   
  render() {
    return (
    <div>
  <form onSubmit = {e=>this.props.formAdd(e)}  >
        <h3>Add New Ticket</h3>
        <div>
          <label htmlFor="TicketType">TicketType</label>
          <input
            required
            name="TicketType"
            value={this.props.TicketType}
            type="text"
            placeholder="TicketType"
            onChange={this.props.handleChange}
          />
        </div>
        <div>
          <label htmlFor="TicketDescription">TicketDescription</label>
          <input
            required
            name="TicketDescription"
            value={this.props.TicketDescription}
            type="texte"
            placeholder="TicketDescription"
            onChange={this.props.handleChange}
          />
        </div>
        <div>
          <label htmlFor="TicketState">TicketState</label>
          <input
            required
            name="TicketState"
            value={this.props.TicketState}
            type="text"
            placeholder="TicketState"
            onChange={this.props.handleChange}
          />
        </div>
        

        <button type="submit">Add</button>
        {/* <button type="submit">Edit</button> */}

        </form>
    </div>
    );
  }
}
export default TicketForm;
