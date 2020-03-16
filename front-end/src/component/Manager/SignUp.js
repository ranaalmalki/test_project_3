import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { signUp, signIn } from "../api";
import messages from "../messages";

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      empFullName: "",
      email: "",
      empUsername: "",
      password: "",
      empPhone: ""
    };
  }

  handleChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    });

  onSignUp = event => {
    event.preventDefault();

    const { alert, history, setUser } = this.props;

    signUp(this.state)
      .then(() => signIn(this.state))
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signUpSuccess, "success"))
      .then(() => history.push("/"))
      .catch(error => {
        console.error(error);
        this.setState({
          empFullName: "",
          email: "",
          empUsername: "",
          password: "",
          empPhone: ""
        });
        alert(messages.signUpFailure, "danger");
      });
  };

  render() {
    const { empFullName, email, empUsername, password, empPhone } = this.state;

    return (
      <form className="auth-form" onSubmit={this.onSignUp}>
        <h3>Sign Up</h3>

        <label htmlFor="empFullName"></label>
        <input
          required
          name="empFullName"
          value={empFullName}
          type="text"
          placeholder="empFullName"
          onChange={this.handleChange}
        />
           <label htmlFor="empUsername"></label>
        <input
          required
          name="empUsername"
          value={empUsername}
          type="text"
          placeholder="empUsername"
          onChange={this.handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          required
          name="email"
          value={email}
          type="email"
          placeholder="Email"
          onChange={this.handleChange}
        />
        <label htmlFor="password">Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
           <label htmlFor="empPhone"></label>
        <input
          required
          name="empPhone"
          value={empPhone}
          type="text"
          placeholder="empPhone"
          onChange={this.handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

export default withRouter(SignUp);
