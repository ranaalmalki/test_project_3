import React, { Component } from 'react';
import { getJwt } from './helper';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import apiURL from'../../APIconfig';


class AuthenticatedComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined
    };
  }

  componentDidMount() {
    const jwt = getJwt();
    console.log(jwt)
    if (!jwt) {
    console.log('no jwt')

      this.props.history.push('/Login');
    }else{
      this.setState({
        user: jwt
      })
    }


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
        emp heder
        {this.props.children}
      </div>
    );
  }

}

export default withRouter(AuthenticatedComponent);