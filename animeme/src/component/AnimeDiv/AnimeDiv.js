import React, { Component } from "react";
import "./AnimeDiv.css";
import { Link } from "react-router-dom";

class AnimeDiv extends Component {
  render() {
    return (
      <Link to={"/animes/" + this.props.animes.titles.en_jp}>
        <div
          className="animediv"
          style={{
            backgroundImage: `url(${this.props.animes.images.medium})`
          }}
        >
          <p>{this.props.animes.titles.en_jp}</p>
        </div>
      </Link>
    );
  }
}

export default AnimeDiv;
