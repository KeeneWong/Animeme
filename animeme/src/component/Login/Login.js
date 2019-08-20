import React, { Component } from "react";
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
            onChange={this.updatesearch}
          />
          <h3>password</h3>
          <input
            className="loginfield"
            placeholder="password"
            onChange={this.updatesearch}
          />
          <h3 className="loginbutton">login</h3>
          <div className="signuplink">
            <h4>no account ? </h4>
            {/* <Link></Link> */}
            <h4 className="signupbutton">Sign Up </h4>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
