import React from 'react';
import {AddNewEmployee} from '../api';
import NewEmployee from './NewEmployee';
import { getInfo } from '../login/decodeToken';

class Manager extends React.Component{
    constructor(){
        super();
        this.addEmployee = this.addEmployee.bind(this);
    }
    addEmployee = emp => {
        // Make an axios request
        console.log(emp,"Manager");
        let mId = getInfo().data._id

        AddNewEmployee(emp,mId)
          .then(response => {
            console.log(
              `The Employee ${emp.empFullName} has been added successfully.`
            );
              })
          .catch(error => {
            console.log("API ERROR: ", error);
          });
      };
    render(){
        return(

            <div>
<NewEmployee addEmployee={this.addEmployee}/>            
</div>
        );
    }
}
export default Manager;