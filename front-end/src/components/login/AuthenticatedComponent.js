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
    if (!jwt) {
      this.props.history.push('/Login');
    }

    axios.get(`${apiURL}/emp/register`, { headers: { Authorization: `Bearer ${jwt}` } }).then(res => this.setState({
      user: res.data
    })).catch(err => {
      localStorage.removeItem('cool-jwt');
      this.props.history.push('/NewEmployee');
    });
  }

  render() {
    if (this.state.user === undefined) {
      return (
        <div><h1>Loading...</h1></div>
      );
    }

    return (
      <div>
        {this.props.children}
      </div>
    );
  }

}

export default withRouter(AuthenticatedComponent);