import React, { Component } from "react";
import "./Home.css";
import AnimeDiv from "../AnimeDiv/AnimeDiv";
import { connect } from "react-redux";

class HomeDisplay extends Component {
  render() {
    // return (
    //   <div className="allanimes">
    //     {this.props.animes.map(anime => (
    //       <AnimeDiv key={anime._id} animes={anime} />
    //     ))}
    //   </div>
    // );

    // console.log(this.props);
    let animes = this.props.animes.map(each => {
      return <AnimeDiv key={each._id} animes={each} />;
    });
    return <div class="allanimes">{animes}</div>;
  }
}

function mapStateToProps(state) {
  return { animes: state.anime.animes };
}

const Home = connect(mapStateToProps)(HomeDisplay);
export default Home;
