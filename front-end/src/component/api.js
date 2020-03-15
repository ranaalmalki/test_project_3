import apiURL from'../APIconfig';
import axios from 'axios';


// Get All Articles
const getAllTicket = () => {
   return axios.get(`${apiURL}/emp_ticket`);
}



 export { getAllArticles };
