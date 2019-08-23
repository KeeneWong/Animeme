import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    // let checkstatus;
    let navrender;
    if (this.props.state.isLoggedIn === true) {
      // checkstatus = "true";
      navrender = [
        <nav>
          <Link to="/" className="navitem navitem1">
            <h2>
              <span className="red">A</span>nimeme
            </h2>
          </Link>
          {/* <h3>{checkstatus}</h3> */}
          <Link to="/favourite" className="navitem navitem3">
            <h3>
              Favourite <span className="heart">❤</span>
            </h3>
          </Link>
          <Link to="/" className="navitem navitem4">
            <h3>Home</h3>
          </Link>
          <Link to="/search" className="navitem navitem5">
            <h3>Search</h3>
          </Link>
          <Link to="/" className="navitem navitem6">
            <h3 onClick={this.props.handleLogOut}>Logout</h3>
          </Link>
          <Link to="/favourite" className="navitem navitem5 star">
            <h3>❤</h3>
          </Link>
          <div className="dropdown navitem6">
            <button className="dropbtn">Menu</button>
            <div className="dropdown-content">
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/search">
                <p>Search</p>
              </Link>
              <Link to="/">
                <p onClick={this.props.handleLogOut}>Logout</p>
              </Link>
            </div>
          </div>
        </nav>
      ];
    }
    if (this.props.state.isLoggedIn === false) {
      // checkstatus = "false";
      navrender = [
        <nav>
          <Link to="/" className="navitem navitem1">
            <h2>
              <span className="red">A</span>nimeme
            </h2>
          </Link>
          {/* <h3>{checkstatus}</h3> */}
          {/* <h3>{this.props.state.email}</h3> */}
          <Link to="/" className="navitem navitem4">
            <h3>Home</h3>
          </Link>
          <Link to="/search" className="navitem navitem5">
            <h3>Search</h3>
          </Link>
          <Link to="/login" className="navitem navitem6">
            <h3>Login</h3>
          </Link>
          <div className="dropdown navitem6">
            <button className="dropbtn">Menu</button>
            <div className="dropdown-content">
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/search">
                <p>Search</p>
              </Link>
              <Link to="/login">
                <p>Login</p>
              </Link>
            </div>
          </div>
        </nav>
      ];
    }
    return <div>{navrender}</div>;
  }
}

export default Navbar;
