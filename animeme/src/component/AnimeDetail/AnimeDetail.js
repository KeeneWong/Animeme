import React, { Component } from "react";
import "./AnimeDetail.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Details extends Component {
  render() {
    let thisanime = this.props.animes.filter(each => {
      return each.titles.en_jp === this.props.match.params.animeName;
    });
    return (
      <div>
        {thisanime.map(anime => (
          <div
            className="animeDetail darken-pseudo darken-with-text"
            style={{
              backgroundImage: `url(${thisanime[0].images.original})`
            }}
          >
            <div className="leftDetail">
              <div
                className="detailimg"
                style={{
                  backgroundImage: `url(${thisanime[0].images.original})`
                }}
              />
            </div>
            <div className="rightDetail">
              <h1>{thisanime[0].titles.en_jp}</h1>
              <h3>{thisanime[0].synopsis}</h3>
              <Link to="/">
                <h3 className="backbutton">Back</h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  animes: state.anime.animes
});

const AnimeDetail = connect(mapStateToProps)(Details);
export default AnimeDetail;
