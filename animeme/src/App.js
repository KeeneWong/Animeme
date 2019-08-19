import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./component/Home/Home";

const data = require("./animeData.json");

class App extends Component {
  constructor() {
    super();
    this.state = {
      animes: data
    };
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/" class="navitem1">
            <h2>Animeme</h2>
          </Link>
          <Link to="/" class="navitem4">
            <h3>Home</h3>
          </Link>
          <Link class="navitem5">
            <h3>Tab2</h3>
          </Link>
          <Link class="navitem6">
            <h3>Tab3</h3>
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
            path="/"
            exact
            render={routeProps => (
              <Home animes={this.state.animes} {...routeProps} />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
