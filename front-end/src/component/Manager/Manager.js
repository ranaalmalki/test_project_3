import React from 'react';
import SignUp from './SignUp';
import { addNewEmployee } from "../api";

// import Tickets from '../Tickets/Tickets';

class Manager extends React.Component{
    AddEmployee = (emp) =>{
        addNewEmployee(emp)
        .then(res=>{
            console.log(`employee add ${res.data.emps}`);

        })
      .cache(error =>{
          console.log("ERROR:",error);
      })  ;
    } 

    render(){
        return(
            <div>
                <SignUp AddEmployee={this.AddEmployee}/>
{/* <Tickets/> */}
            </div> 
        );
    }
}
export default Manager;