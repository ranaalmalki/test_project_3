import React, { Component } from "react";
import axios from "axios";
import { BehaviorSubject } from "rxjs";
import jwt_decode from "jwt-decode";
import { getInfo } from "./decodeToken";

import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empUsername: "",
      password: ""
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/emp/login", {
        empUsername: this.state.empUsername,
        password: this.state.password
      })
      .then(res => {
        console.warn("res", res);
        localStorage.setItem("currentUser", res.data.token);
        let jwt1 = getInfo().type;

        if (jwt1 === "admin") {
          console.log("a:", jwt1);
          this.props.history.push("/AdminHeader");
        } else if (jwt1 === "emp") {
          this.props.history.push("/EmpHeader");
        } else if (jwt1 === undefined) {
          console.log("b: ", jwt1);
          this.props.history.push("/Login");
        }

        return res;
      })
      .catch(error => {
        console.log("ERROR: ", error);
      });
  }

  render() {
    return (
      <div class="container" onclick="onclick">
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="center">
          <h2>Please Sign In</h2>
          <form onSubmit={e => this.submit(e)}>
            <input
              type="text"
              name="empUsername"
              onChange={e => this.change(e)}
              value={this.state.empUsername}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={e => this.change(e)}
              value={this.state.password}
            />
            <button type="submit">Submit</button>
          </form>
          <h2>&nbsp;</h2>
        </div>
      </div>
    );
  }
}

export default Login;
