import apiURL from'../APIconfig';
import axios from 'axios';


// Get All Ticket
const getAllTicket = () => {
   return axios.get(`${apiURL}/emp_ticket`);
}



 export { getAllTicket };
