import React from "react";
import { Link } from "react-router-dom";

export default class LoginPage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: ""
  };

  change = input => {
    this.setState({
      [input.target.name]: input.target.value
    });
  };

  onSubmit = input => {
    input.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <Link to="/">go bAck h000me</Link>
        <form>
          <input
            name="firstName"
            placeholder="First name"
            value={this.state.firstName}
            onChange={input => this.change(input)}
          />
          <br />
          <input
            name="lastName"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={input => this.change(input)}
          />
          <br />
          <input
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={input => this.change(input)}
          />
          <br />
          <input
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={input => this.change(input)}
          />
          <br />
          <input
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={input => this.change(input)}
          />
          <br />
          <button onClick={() => this.onSubmit()}>Submit</button>
        </form>
      </div>
    );
  }
}
