import React, { Component } from "react";
import "./Home.css";
import AnimeDiv from "../AnimeDiv/AnimeDiv";

class Home extends Component {
  render() {
    // console.log(this.props);
    let animes = this.props.animes.map(each => {
      return <AnimeDiv key={each._id} animes={each} />;
    });
    return <div className="allanimes">{animes}</div>;
  }
}

export default Home;
