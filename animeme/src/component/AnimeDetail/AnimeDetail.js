import React, { Component } from "react";
import "./AnimeDetail.css";

class AnimeDetail extends Component {
  render() {
    let thisanime = this.props.animes.filter(each => {
      return each.titles.en_jp === this.props.match.params.animeName;
    });
    return (
      <div
        class="animeDetail darken-pseudo darken-with-text"
        style={{
          backgroundImage: `url(${thisanime[0].images.original})`,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        }}
      >
        <h1>detail</h1>
        <h1>{thisanime[0].titles.en_jp}</h1>
      </div>
    );
  }
}

export default AnimeDetail;
