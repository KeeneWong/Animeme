import React, { Component } from "react";
import AnimeDiv from "../AnimeDiv/AnimeDiv";
import axios from "axios";
import { connect } from "react-redux";
import "../AnimeDiv/AnimeDiv.css";
import "./UserFavourite.css";

class FavouriteDisplay extends Component {
  constructor() {
    super();
    this.state = {
      userinfo: ""
    };
  }
  componentDidMount() {
    // axios
    //   .get(
    //     "https://animeme-api.herokuapp.com/api/users/acc/" +
    //       this.props.user.currentUser.email
    //   )
    //   .then(data => {
    //     console.log(`working`);
    //     console.log(data.data);
    //     this.setState({ userinfo: data.data });
    //     // console.log(all.data);
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });
  }

  render() {
    console.log(this.state);
    let userfavorites;
    if (this.props.user.currentUser.favorites !== undefined) {
      userfavorites = this.props.animes.map(each => {
        if (this.props.user.currentUser.favorites.includes(each.id)) {
          return <AnimeDiv animes={each} />;
        }
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

const mapStateToProps = state => ({
  animes: state.anime.animes,
  user: state.users
});

const UserFavourite = connect(mapStateToProps)(FavouriteDisplay);

export default UserFavourite;
