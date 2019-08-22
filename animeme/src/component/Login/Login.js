import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import { connect } from "react-redux";
import { signIn } from "../../actions/userList.js";

class LoginScreen extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  componentDidMount() {
    // console.log(this.props);
  }

  handleLogIn = e => {
    // this.props.login(this.state.email);
    // console.log(this.props);
    e.preventDefault();
    axios
      .post("https://animeme-api.herokuapp.com/api/users/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        console.log(this.props);
        this.props.login(this.state.email);
        localStorage.token = response.data.token;
        this.props.history.push("/");
      })
      .catch(err => {
        alert(`wrong email or password`);
        console.log(err);
      });
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

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
          <h3 className="loginbutton" type="submit" onClick={this.handleLogIn}>
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

function mapStateToProps(state) {
  return { user: state.users };
}

function mapDispatchToProps(dispatch) {
  return {
    login: email => dispatch(signIn(email))
  };
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
export default Login;
