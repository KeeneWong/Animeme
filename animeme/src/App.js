import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import AnimeDetail from "./component/AnimeDetail/AnimeDetail";
import Search from "./component/Search/Search";
import Login from "./component/Login/Login";
import axios from "axios";
import Signup from "./component/SignUp/Signup";
import Navbar from "./component/Navbar/Navbar";
import UserFavourite from "./component/UserFavourite/UserFavourite";
import { withRouter } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      animes: [],
      userName: "",
      email: "",
      password: "",
      isLoggedIn: false
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this);
  };

  handleSignUp = e => {
    e.preventDefault();
    axios
      .post("https://animeme-api.herokuapp.com/api/users/signup", {
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        this.setState({ isLoggedIn: true });
        alert(`a user has been signup`);
        this.props.history.push("/");
      })
      .catch(err => {
        alert(`Invaild information`);
        console.log(err);
      });
  };

  handleLogOut = () => {
    this.setState({
      email: "",
      password: "",
      isLoggedIn: false
    });
    localStorage.clear();
  };

  handleLogIn = e => {
    e.preventDefault();
    axios
      .post("https://animeme-api.herokuapp.com/api/users/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
        this.props.history.push("/");
      })
      .catch(err => {
        alert(`wrong email or password`);
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Navbar state={this.state} handleLogOut={this.handleLogOut} />
        <main>
          <Route path="/" exact render={() => <Home />} />
          <Route
            path="/animes/:animeName"
            exact
            render={routeProps => <AnimeDetail {...routeProps} />}
          />
          <Route path="/search" exact render={() => <Search />} />

          <Route
            path="/login"
            exact
            render={routeProps => (
              <Login
                isLoggedIn={this.state.isLoggedIn}
                handleInput={this.handleInput}
                handleLogIn={this.handleLogIn}
                {...routeProps}
              />
            )}
          />
          <Route
            path="/signup"
            exact
            render={routeProps => (
              <Signup
                isLoggedIn={this.state.isLoggedIn}
                handleInput={this.handleInput}
                handleSignUp={this.handleSignUp}
                {...routeProps}
              />
            )}
          />
          <Route
            path="/favourite"
            exact
            render={routeProps => <UserFavourite {...routeProps} />}
          />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
