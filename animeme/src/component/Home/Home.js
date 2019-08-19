import React, { Component } from "react";
import "./Home.css";
import AnimeDiv from "../AnimeDiv/AnimeDiv";

class Home extends Component {
  render() {
    let animes = this.props.animes.map(each => {
      return <AnimeDiv animes={each} />;
    });
    return <div class="allanimes">{animes}</div>;
  }
}

export default Home;
