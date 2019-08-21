import React, { Component } from "react";
import "./AnimeDetail.css";
import axios from "axios";
import { Link } from "react-router-dom";

class AnimeDetail extends Component {
  constructor() {
    super();
    this.state = {
      anime_id: "",
      favorites: ""
    };
  }

  //this is a function that take the favorites state to update the database user's favorites animes
  updateFavorite = () => {
    document.querySelector(".addbutton").classList.toggle("green");
    document.querySelector(".addbutton").innerText = "Added";
    axios
      .put(
        //it use the props that pass down  by App.js
        "https://animeme-api.herokuapp.com/api/users/acc/" + this.props.email,
        {
          //set the database
          favorites: this.state.favorites
        }
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  };

  setstateofFavorites = () => {
    //thisanime filter the anime by the params
    // the params was create by the Link to in AnimeDiv
    let thisanime = this.props.animes.filter(each => {
      //return the single anime that match the params
      return each.titles.en_jp === this.props.match.params.animeName;
    });
    //take the result to set the state of anime_id
    this.setState({ anime_id: thisanime[0]._id });

    //get the original user favorites set of animes and create a new one by adding a new animes using (concat)
    axios
      .get(
        "https://animeme-api.herokuapp.com/api/users/ref/" + this.props.email
      )
      .then(res => {
        console.log(res.data.favorites.indexOf(this.state.anime_id));
        if (res.data.favorites.indexOf(this.state.anime_id) === -1) {
          let originalfav = res.data.favorites.concat(this.state.anime_id);
          this.setState({
            favorites: originalfav
          });
          this.updateFavorite();
        } else if (res.data.favorites.indexOf(this.state.anime_id) !== -1) {
          alert(`This anime has been already added to your favorites list`);
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    let buttons;
    let thisanime = this.props.animes.filter(each => {
      return each.titles.en_jp === this.props.match.params.animeName;
    });
    if (this.props.isLoggedIn === true) {
      buttons = [
        <Link to="/">
          <h3 class="backbutton">Back</h3>
        </Link>,
        <h3 class="backbutton addbutton" onClick={this.setstateofFavorites}>
          Add To Favorite
        </h3>
      ];
      let thisanime = this.props.animes.filter(each => {
        //return the single anime that match the params
        return each.titles.en_jp === this.props.match.params.animeName;
      });

      axios
        .get(
          "https://animeme-api.herokuapp.com/api/users/ref/" + this.props.email
        )
        .then(res => {
          if (res.data.favorites.indexOf(thisanime[0]._id) !== -1) {
            document.querySelector(".addbutton").classList.toggle("green");
            document.querySelector(".addbutton").innerText = "Added";
          }
        });
    } else if (this.props.isLoggedIn === false) {
      buttons = [
        <Link to="/">
          <h3 class="backbutton">Back</h3>
        </Link>
      ];
    }

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
          {/* <h2>{this.state.favorites[0]}</h2>
          <h2>{this.state.favorites[1]}</h2> */}
        </div>
      </div>
    );
  }
}

export default AnimeDetail;
