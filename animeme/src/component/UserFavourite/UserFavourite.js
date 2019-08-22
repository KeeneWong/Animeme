import React, { Component } from "react";
import AnimeDiv from "../AnimeDiv/AnimeDiv";
import axios from "axios";
import "../AnimeDiv/AnimeDiv.css";
import "./UserFavourite.css";

class UserFavourite extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: ""
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://animeme-api.herokuapp.com/api/users/acc/" + this.props.email
      )
      .then(data => {
        console.log(`working`);
        console.log(data.data);
        this.setState({ userinfo: data.data });
        // console.log(all.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    let userfavorites;
    if (this.state.userinfo.favorites !== undefined) {
      userfavorites = this.state.userinfo.favorites.map(each => {
        console.log(each);
        return <AnimeDiv animes={each} />;
      });
    }

    return (
      <div>
        <h1>User Favorite Animes</h1>
        <div className="allanimes">{userfavorites}</div>
      </div>
    );
  }
}

export default UserFavourite;
