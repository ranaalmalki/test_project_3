import React from 'react';
import apiURL from'./APIconfig';
// Components
import Login from './components/login/Login'
import AdminHeader from './components/Headers/AdminHeader'
import EmpHeader from './components/Headers/EmpHeader'
export default class App extends React.Component {
  render(){
    console.log('MY API :  ',apiURL);
    return (
      <>
      <Login/>
      {/* <AdminHeader/> */}
      {/* <EmpHeader/> */}
      </>
    );
  }
}