import React, { Component } from "react";
import "./Search.css";
import { Link } from "react-router-dom";

class Search extends Component {
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
      //   console.log(each.titles.en_jp);
      if (each.titles.en_jp === undefined) {
        console.log(`nothing`);
        return;
      }
      if (each.titles.en_jp.includes(this.state.searchvalue)) {
        console.log("match");
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
      displayresult = <div class="pika" />;
    }

    return (
      <div class="searchmain">
        <h1 className="searchh1">search</h1>
        {/* <h2>{this.state.searchvalue}</h2> */}
        <h2>{this.state.result}</h2>

        <input
          className="searchfield"
          placeholder="anime name"
          onChange={this.updatesearch}
        />
        {/* <button className="searchbutton" onClick={this.updateresult}>
          Search
        </button> */}
        {/* <div class="pika" /> */}

        <div>{displayresult}</div>
      </div>
    );
  }
}

export default Search;
