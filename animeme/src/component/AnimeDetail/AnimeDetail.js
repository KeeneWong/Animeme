import React, { Component } from "react";
import "./AnimeDetail.css";
import { Link } from "react-router-dom";

class AnimeDetail extends Component {
  constructor() {
    super();
    this.state = {
      anime_id: ""
    };
  }

  updateFavorite = e => {};

  render() {
    let buttons;
    if (this.props.isLoggedIn === true) {
      buttons = [
        <Link to="/">
          <h3 class="backbutton">Back</h3>
        </Link>,
        <h3 class="backbutton" onClick={this.updateFavorite}>
          Favorite
        </h3>
      ];
    } else if (this.props.isLoggedIn === false) {
      buttons = [
        <Link to="/">
          <h3 class="backbutton">Back</h3>
        </Link>
      ];
    }
    let thisanime = this.props.animes.filter(each => {
      if (each.titles.en_jp === this.props.match.params.animeName) {
        this.setState({ anime_id: each._id });
      }
      return each.titles.en_jp === this.props.match.params.animeName;
    });
    // console.log(this.props.animes);
    console.log(buttons);

    return (
      <div
        class="animeDetail darken-pseudo darken-with-text"
        style={{
          backgroundImage: `url(${thisanime[0].images.original})`
        }}
      >
        <div class="leftDetail">
          <div
            class="detailimg"
            style={{
              backgroundImage: `url(${thisanime[0].images.original})`
            }}
          />
        </div>
        <div class="rightDetail">
          <h1>{thisanime[0].titles.en_jp}</h1>
          <h3 className="overflow synopsis">{thisanime[0].synopsis}</h3>
          <div>{buttons}</div>
        </div>
      </div>
    );
  }
}

export default AnimeDetail;
