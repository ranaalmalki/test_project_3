import React from 'react';
import {AddNewTicket} from '../api';
import NewTicket from './NewTicket';
class Employee extends React.Component{
    constructor(){
        super();
      
        this.addTicket = this.addTicket.bind(this);
    }
    addTicket = tic => {
        // Make an axios request
        console.log(tic,"Employee");

        AddNewTicket(tic ,"5e6d0bbe528d7029680f41b4")
          .then(response => {
            console.log(
              `The Ticket ${tic.empFullName} has been added successfully.`
            );
              })
          .catch(error => {
            console.log("API ERROR: ", error);
          });
      };

    //   addTicket = tic => {
    //     // Make an axios request
    //     console.log(tic,"Employee");

    //     AddNewTicket(tic)
    //       .then(response => {
    //         console.log(
    //           `The Ticket ${tic.empFullName} has been added successfully.`
    //         );
    //           })
    //       .catch(error => {
    //         console.log("API ERROR: ", error);
    //       });
    //   };
    render(){
        return(

            <div>
<NewTicket addTicket={this.addTicket}/>            
</div>
        );
    }
}
export default Employee;