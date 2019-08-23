import React, { Component } from "react";
import { connect } from "react-redux";
import { createNewUser } from "../../actions/userList";

class SignupDisplay extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      password: ""
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSignUp = e => {
    e.preventDefault();
    this.props.signup(
      this.state.email,
      this.state.userName,
      this.state.password
    );
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="loginmain">
        <h1>Sign Up</h1>
        <form className="loginform">
          <h3>user e-mail</h3>
          <input
            className="loginfield"
            placeholder="email"
            type="email"
            name="email"
            onChange={this.handleInput}
          />
          <h3>user name</h3>
          <input
            className="loginfield"
            placeholder="username"
            name="userName"
            onChange={this.handleInput}
          />
          <h3>password</h3>
          <input
            className="loginfield"
            placeholder="password"
            type="password"
            name="password"
            onChange={this.handleInput}
          />
          <h3 className="loginbutton" type="submit" onClick={this.handleSignUp}>
            signup
          </h3>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signup: (email, userName, password) =>
      dispatch(createNewUser(email, userName, password))
  };
}

const Signup = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupDisplay);

export default Signup;
