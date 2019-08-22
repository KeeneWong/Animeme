import React, { Component } from "react";
import "./Signup.css";
import { connect } from "react-redux";
import { createNewUser } from "../../actions/userList";
import axios from "axios";

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
    // axios
    //   .post("https://animeme-api.herokuapp.com/api/users/signup", {
    //     userName: this.state.userName,
    //     email: this.state.email,
    //     password: this.state.password
    //   })
    //   .then(response => {
    //     this.setState({ isLoggedIn: true });
    //     alert(`a user has been signup`);
    //     this.props.history.push("/");
    //   })
    //   .catch(err => {
    //     alert(`Invaild information`);
    //     console.log(err);
    //   });
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
