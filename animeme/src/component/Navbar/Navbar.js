import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    let checkstatus;
    if (this.props.state.isLoggedIn === true) {
      checkstatus = "true";
    }
    if (this.props.state.isLoggedIn === false) {
      checkstatus = "false";
    }
    return (
      <nav>
        <Link to="/" className="navitem navitem1">
          <h2>Animeme</h2>
        </Link>
        <h3>{checkstatus}</h3>
        <h3>{this.props.state.email}</h3>
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
    );
  }
}

export default Navbar;
