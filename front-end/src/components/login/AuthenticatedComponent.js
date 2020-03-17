import React, { Component } from 'react';
import { getJwt } from './helper';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

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
      this.props.history.push('http://localhost:5000/api/admin/Login');
    }

    axios.get('http://localhost:5000/api/admin/allTickets', { headers: { Authorization: `Bearer ${jwt}` } }).then(res => this.setState({
      user: res.data
    })).catch(err => {
      localStorage.removeItem('my-jwt');
      this.props.history.push('http://localhost:5000/api/admin/Login');
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