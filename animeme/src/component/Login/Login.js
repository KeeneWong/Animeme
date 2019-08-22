import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="loginmain">
        <h1>login</h1>
        <form className="loginform">
          <h3>user e-mail</h3>
          <input
            className="loginfield"
            placeholder="email"
            type="email"
            name="email"
            onChange={this.props.handleInput}
          />
          <h3>password</h3>
          <input
            className="loginfield"
            placeholder="password"
            type="password"
            name="password"
            onChange={this.props.handleInput}
          />
          <h3
            className="loginbutton"
            type="submit"
            onClick={this.props.handleLogIn}
          >
            login
          </h3>
          <div className="signuplink">
            <h4>no account ? </h4>
            <Link to="/signup">
              <h4 className="signupbutton">Sign Up </h4>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
