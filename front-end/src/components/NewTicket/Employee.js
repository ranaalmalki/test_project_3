import React from 'react';
import {AddNewTicket,UpdateTicket} from '../api';
import NewTicket from './NewTicket';
import EditTicket from './EditTicket';
class Employee extends React.Component{
    constructor(){
        super();
      
        this.addTicket = this.addTicket.bind(this);
        this. EditUpdateTicket = this. EditUpdateTicket.bind(this);

    }
    addTicket = (tic,id) => {
        // Make an axios request
        console.log(tic,"Employee");

        AddNewTicket(tic,"5e6d0bbe528d7029680f41b4")
          .then(response => {
            console.log(
              `The Ticket ${tic.empFullName} has been added successfully.`
            );
              })
          .catch(error => {
            console.log("API ERROR: ", error);
          });
      };

      EditUpdateTicket = (tic,id) => {
        // Make an axios request
        console.log(tic,"Employee");

        UpdateTicket(tic,"5e70d5f72d8112124718a708")
          .then(response => {
            console.log(
              `The Ticket ${tic.TicketType} has been Edit successfully.`
            );
              })
          .catch(error => {
            console.log("API ERROR: ", error);
          });
      };
    render(){
        return(

            <div>
<NewTicket addTicket={this.addTicket} />   
{/* <EditTicket  EditUpdateTicket={this.EditUpdateTicket}/> */}

</div>
        );
    }
}
export default Employee;