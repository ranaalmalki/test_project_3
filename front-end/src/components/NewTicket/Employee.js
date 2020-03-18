import React from "react";
import { AddNewTicket, UpdateTicket } from "../api";
import NewTicket from "./NewTicket";
import EditTicket from "./EditTicket";
import { getInfo } from "../login/decodeToken";

class Employee extends React.Component {
  constructor() {
    super();

    this.addTicket = this.addTicket.bind(this);
    this.EditUpdateTicket = this.EditUpdateTicket.bind(this);
  }

  addTicket = tic => {
    // Make an axios request
    console.log(tic, "Employee");
    let mId = getInfo().data._id;
    console.log(mId);
    AddNewTicket(tic, mId)
      .then(response => {
        console.log(
          `The Ticket ${tic.empFullName} has been added successfully.`
        );
      })
      .catch(error => {
        console.log("API ERROR: ", error);
      });
  };

  render() {
    return (
      <div>
        <NewTicket addTicket={this.addTicket} />
      </div>
    );
  }
}
export default Employee;
