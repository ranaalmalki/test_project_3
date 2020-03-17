import React from "react";

class NewEmployee extends React.Component {
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

    formSubmit= e=>{
        const newEmployee = this.state;
console.log(newEmployee," NewEmployee");
        e.preventDefault();
        this.props.addEmployee(newEmployee)
    }

  render() {
    const { empFullName, email, empUsername, password, empPhone } = this.state;

    return (
        <div>
            <form onSubmit = {e=>this.formSubmit(e)}>
        <h3>Add New Employee</h3>
        <div>
          <label htmlFor="empFullName">empFullName</label>
          <input
            required
            name="empFullName"
            value={empFullName}
            type="empFullName"
            placeholder="empFullName"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="empUsername">empUsername</label>
          <input
            required
            name="empUsername"
            value={empUsername}
            type="empUsername"
            placeholder="empUsername"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            required
            name="email"
            value={email}
            placeholder="Email"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="empPhone">empPhone</label>
          <input
            required
            name="empPhone"
            value={empPhone}
            type="empPhone"
            placeholder="empPhone"
            onChange={this.handleChange}
          />
        </div>

        <button type="submit">Add</button>
        </form>
        </div>
    );
  }
}
export default NewEmployee;
