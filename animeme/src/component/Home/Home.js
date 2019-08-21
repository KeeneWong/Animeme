import React from "react";
import "./Home.css";
import AnimeDiv from "../AnimeDiv/AnimeDiv";
import { connect } from "react-redux";

const HomeDisplay = ({ animes }) => {
  return (
    <div className="allanimes">
      {animes.animes.map((anime, index) => (
        <AnimeDiv key={anime._id} animes={anime} />
      ))}
      {animes.titles}
    </div>
  );
};

const mapStateToProps = state => ({
  animes: state.anime
});

const Home = connect(mapStateToProps)(HomeDisplay);
export default Home;
