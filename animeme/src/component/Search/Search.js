import React, { Component } from "react";
import "./Search.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class SearchResults extends Component {
  constructor() {
    super();
    this.state = {
      searchvalue: "",
      result: ""
    };
  }

  updatesearch = e => {
    this.setState({ searchvalue: e.target.value });
  };

  render() {
    let result = [];
    let displayresult;
    this.props.animes.forEach(each => {
      if (each.titles.en_jp === undefined) {
        return;
      }
      if (each.titles.en_jp.includes(this.state.searchvalue)) {
        result.push(each);
      }
    });
    if (this.state.searchvalue !== "") {
      displayresult = result.map(each => (
        <Link to={"/animes/" + each.titles.en_jp}>
          <div class="searchResultdiv test">
            <div
              class="iconimage"
              style={{
                backgroundImage: `url(${each.images.medium})`
              }}
            />
            <div class="searchinfo">
              <h3>{each.titles.en_jp}</h3>
              <h5>Rating: {each.rating}</h5>
              <h5>Status: {each.status}</h5>
            </div>
          </div>
        </Link>
      ));
    } else {
      displayresult = <div className="pika" />;
    }

    return (
      <div className="searchmain">
        <h1>search</h1>
        <h2>{this.state.result}</h2>

        <input
          className="searchfield"
          placeholder="anime name"
          onChange={this.updatesearch}
        />
        <div>{displayresult}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  animes: state.anime.animes
});

const Search = connect(mapStateToProps)(SearchResults);
export default Search;
