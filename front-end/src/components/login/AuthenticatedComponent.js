import React, { Component } from 'react';
import { getJwt } from './helper';
import { getInfo } from './decodeToken';

import { withRouter } from 'react-router-dom';
import axios from 'axios';
import apiURL from'../../APIconfig';
import jwt_decode from 'jwt-decode';


class AuthenticatedComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      admin: undefined,
      user:  undefined
    };
  }

componentDidMount() {
  const jwt = getJwt();
  console.log(jwt)
  let jwt1 = getInfo()
  if (!jwt) {
  console.log('no jwt')
  this.props.history.push('/Login')
   
  }else if(jwt1.data.admin === true){
    this.setState({
      admin: jwt
    })
  }else if(jwt1.data.admin === false){
  this.setState({
    user: jwt
  })
 }else{
  this.props.history.push('/Login')}
}


  

  render() {
    // if (this.state.user!==undefined) {
    //   return (
    //     <div><h1>Loading...</h1></div>
    //   );
    // }
console.log("children :",this.props.children)
    return (
      <div>

        { this.state.admin != undefined ? this.props.children[0] : this.props.children[1]}

      </div>
    );
  }

}

export default withRouter(AuthenticatedComponent);