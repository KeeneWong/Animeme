import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import AnimeDetail from "./component/AnimeDetail/AnimeDetail";
import Search from "./component/Search/Search";
import Login from "./component/Login/Login";
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
      password: ""
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Navbar />
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
            render={routeProps => <Login {...routeProps} />}
          />

          <Route
            path="/signup"
            exact
            render={routeProps => <Signup {...routeProps} />}
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
