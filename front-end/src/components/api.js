import apiURL from'../APIconfig';
import axios from 'axios';


// Get All Ticket
export const getAllTicket = () => {
   return axios.get(`${apiURL}/emp/emp_ticket`);
}


//register new Employee
export const AddNewEmployee = req => {
   return axios({
     method: 'POST',
     url: apiURL + '/api/admin/register',
     data:{
         empFullName:req.empFullName,
         email: req.email,
         empUsername:req.empUsername,
         password: req.password,
         empPhone: req.empPhone,
     }
     
   })
 }

