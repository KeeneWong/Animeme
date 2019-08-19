import React, { Component } from "react";
import "./AnimeDetail.css";
import { Link } from "react-router-dom";

class AnimeDetail extends Component {
  render() {
    let thisanime = this.props.animes.filter(each => {
      return each.titles.en_jp === this.props.match.params.animeName;
    });
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
          <h3>{thisanime[0].synopsis}</h3>
          <Link to="/">
            <h3 class="backbutton">Back</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default AnimeDetail;
