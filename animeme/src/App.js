import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";
import AnimeDetail from "./component/AnimeDetail/AnimeDetail";
import Search from "./component/Search/Search";
import Login from "./component/Login/Login";
import axios from "axios";

// const data = require("./animeData.json");

class App extends Component {
  constructor() {
    super();
    this.state = {
      animes: []
    };
  }

  componentDidMount() {
    axios
      .get("https://animeme-api.herokuapp.com/api/anime")
      .then(all => {
        // console.log(allchamp.data);
        this.setState({ animes: all.data });
        // console.log(all.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <nav>
          <Link to="/" className="navitem navitem1">
            <h2>Animeme</h2>
          </Link>
          <Link to="/" className="navitem navitem4">
            <h3>Home</h3>
          </Link>
          <Link to="/search" className="navitem navitem5">
            <h3>Search</h3>
          </Link>
          <Link to="/login" className="navitem navitem6">
            <h3>Login</h3>
          </Link>
        </nav>
        <main>
          <Route
            path="/"
            exact
            render={routeProps => (
              <Home animes={this.state.animes} {...routeProps} />
            )}
          />
          <Route
            path="/animes/:animeName"
            exact
            render={routeProps => (
              <AnimeDetail animes={this.state.animes} {...routeProps} />
            )}
          />
          <Route
            path="/search"
            exact
            render={routeProps => (
              <Search animes={this.state.animes} {...routeProps} />
            )}
          />

          <Route
            path="/login"
            exact
            render={routeProps => (
              <Login animes={this.state.animes} {...routeProps} />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
