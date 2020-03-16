import apiURL from'../apiConfig';
import axios from 'axios';


// Get All Ticket
export const getAllTicket = () => {
   return axios.get(`${apiURL}/emp_ticket`);
}

 
//----------------Admin----------------------
// export const signInAdmin = credentials => {
//   return axios({
//     url: `${apiURL}/api/admin/login`,
//     method: 'POST',
//     data: {
//       credentials: {
//         empUsername: credentials.empUsername,
//         password: credentials.password
//       }
//     }
//   })
// }


// export const profileAdmin = () => {
//   return axios({
//     url: `${apiURL}/api/admin/profile`,
//     method: 'GET',
//         headers: {
//       'Authorization': `Bearer ${user.token}` // FOR EXPRESS
//     }
//   })
// }

// export const signOutAdmin = user => {
//   return axios({
//     url: `${apiURL}/api/admin/LogOut`,
//     method: 'DELETE',
//     headers: {
//       'Authorization': `Bearer ${user.token}` // FOR EXPRESS
//     }
//   })
// }


//----------------Emp----------------------
export const signUp = credentials => {
  return axios({
    method: 'POST',
    url: `${apiURL}/api/emp/register`,
    data: {
      credentials: {
        empFullName: credentials.empFullName,
        empUsername: credentials.empUsername,
        email: credentials.email,
        empPhone: credentials.empPhone,
        password: credentials.password,
      }
    }
  })
}

export const signIn = credentials => {
  return axios({
    url: `${apiURL}/api/emp/login`,
    method: 'POST',
    data: {
      credentials: {
        empUsername: credentials.empUsername,
        password: credentials.password
      }
    }
  })
}

// export const signOut = user => {
//   return axios({
//     url: `${apiURL}/api/emp/logOut`,
//     method: 'DELETE',
//     headers: {
//       'Authorization': `Bearer ${user.token}` // FOR EXPRESS
//       // 'Authorization': `Token ${user.token}` // FOR RAILS
//     }
//   })
// }

export const profileEmp = () => {
  return axios({
    url: `${apiURL}/api/emp/profile`,
    method: 'GET',
        headers: {
      'Authorization': `Bearer ${user.token}` // FOR EXPRESS
    }
  })
}