import React, { Component } from "react";
import "./AnimeDetail.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addFavorite,
  updateUser,
  removeFavorite
} from "../../actions/userList";

class Details extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // console.log(this.props);
  }

  //this is a function that take the favorites state to update the database user's favorites animes
  updateFavorite = async () => {
    document.querySelector(".addbutton").classList.add("green");
    document.querySelector(".addbutton").innerText = "Added";
    document.querySelector(".deletebutton").classList.remove("hidden");
    axios
      .put(
        //it use the props that pass down  by App.js
        "https://animeme-api.herokuapp.com/api/users/acc/" +
          this.props.user.currentUser.email,
        {
          //set the database
          favorites: this.props.user.currentUser.favorites
        }
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  };

  setstateofFavorites = async () => {
    //thisanime filter the anime by the params
    // the params was create by the Link to in AnimeDiv
    let thisanime = this.props.animes.filter(each => {
      //return the single anime that match the params
      return each.titles.en_jp === this.props.match.params.animeName;
    });

    // console.log(
    //   this.props.user.currentUser.favorites.includes(thisanime[0].id)
    // );
    if (!this.props.user.currentUser.favorites.includes(thisanime[0].id)) {
      await this.props.addFavorite(thisanime[0].id);
      await this.updateFavorite();
    }
    // if (
    //   this.props.user.currentUser.favorites.includes(thisanime[0].id)
    // )
    else {
      alert(`This anime has been already added to your favorites list`);
    }
  };

  deletefromFavorites = () => {
    document.querySelector(".deletebutton").classList.add("hidden");
    document.querySelector(".addbutton").classList.remove("green");
    document.querySelector(".addbutton").innerText = "Add To Favorite";
    let thisanime = this.props.animes.filter(each => {
      //return the single anime that match the params
      return each.titles.en_jp === this.props.match.params.animeName;
    });

    axios
      .get(
        "https://animeme-api.herokuapp.com/api/users/ref/" +
          this.props.user.currentUser.email
      )
      .then(res => {
        let index = res.data.favorites.indexOf(thisanime[0].id);
        // console.log(index);
        let newfavorites = res.data.favorites;
        newfavorites.splice(index, 1);
        this.props.removeFavorite(newfavorites);
        console.log(newfavorites);
        axios
          .put(
            //it use the props that pass down  by App.js
            "https://animeme-api.herokuapp.com/api/users/acc/" +
              this.props.user.currentUser.email,
            {
              //set the database
              favorites: newfavorites
            }
          )
          .then(res => {
            console.log(res);
          });
      });
  };

  render() {
    let buttons;
    let thisanime = this.props.animes.filter(each => {
      return each.titles.en_jp === this.props.match.params.animeName;
    });
    if (this.props.user.isLoggedIn === true) {
      buttons = [
        <Link to="/">
          <h3 class="backbutton">Back</h3>
        </Link>,
        <h3 class="backbutton addbutton" onClick={this.setstateofFavorites}>
          Add To Favorite
        </h3>,
        <h3
          class="backbutton deletebutton hidden"
          onClick={this.deletefromFavorites}
        >
          Delete
        </h3>
      ];
      let thisanime = this.props.animes.filter(each => {
        //return the single anime that match the params
        return each.titles.en_jp === this.props.match.params.animeName;
      });
      // console.log(
      // this.props.user.currentUser.favorites.includes(thisanime[0].id)
      // );
      axios
        .get(
          "https://animeme-api.herokuapp.com/api/users/ref/" +
            this.props.user.currentUser.email
        )
        .then(res => {
          if (res.data.favorites.includes(thisanime[0].id)) {
            document.querySelector(".addbutton").classList.add("green");
            document.querySelector(".addbutton").innerText = "Added";
            document.querySelector(".deletebutton").classList.remove("hidden");
          }
        });
    } else if (this.props.user.isLoggedIn === false) {
      buttons = [
        <Link to="/">
          <h3 className="backbutton">Back</h3>
        </Link>
      ];
    }
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
              <h3 className="overflow synopsis">{thisanime[0].synopsis}</h3>
              <div className="buttondiv">{buttons}</div>
            </div>
            )
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  animes: state.anime.animes,
  user: state.users
});

const mapDispatchToProps = dispatch => ({
  addFavorite: id => dispatch(addFavorite(id)),
  updateUser: (id, updatedUser) => dispatch(updateUser(id, updatedUser)),
  removeFavorite: arr => dispatch(removeFavorite(arr))
});

const AnimeDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);

export default AnimeDetail;
