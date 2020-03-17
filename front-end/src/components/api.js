import apiURL from'../APIconfig';
import axios from 'axios';


// Get All Ticket
export const getAllTicket = () => {
  return axios.get(`${apiURL}/api/admin/allTickets`);
}


//Add new Employee
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
//Add new Tickect 
 export const AddNewTicket = (req ,id) => {
  return axios({
    method: 'POST',
    url: apiURL + `/api/${id}`,
    data:{
      TicketType:req.TicketType,
      TicketDescription: req.TicketDescription,
      TicketState: req.TicketState,
    }
    
  })
}

//Update Ticket 
export const EditeTicket = (req,id) => {
  return axios({
    method: 'patch',
    url: apiURL + `/api/UpdateTicket/${id}`,
    data:{
      TicketType:req.TicketType,
      TicketDescription: req.TicketDescription,
      TicketState: req.TicketState,
    }
    
  })
}


// Get ALl Emp SendTickets By Emp ID
export const getEmpSendTickets = (id) => {
  return axios.get(`${apiURL}/api/emp/SendTickets/${id}`);
} 