import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

class Signup extends Component {
  render() {
    return (
      <div className="loginmain">
        <h1>Sign Up</h1>
        <form className="loginform">
          <h3>user e-mail</h3>
          <input
            className="loginfield"
            placeholder="email"
            name="email"
            onChange={this.props.handleInput}
          />
          <h3>user name</h3>
          <input
            className="loginfield"
            placeholder="username"
            name="userName"
            onChange={this.props.handleInput}
          />
          <h3>password</h3>
          <input
            className="loginfield"
            placeholder="password"
            name="password"
            onChange={this.props.handleInput}
          />
          <h3
            className="loginbutton"
            type="submit"
            onClick={this.props.handleSignUp}
          >
            signup
          </h3>
        </form>
      </div>
    );
  }
}

export default Signup;
