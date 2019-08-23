import { CREATE_ANIME, UPDATE_ANIME } from "../constants/animeList.js";
import axios from "axios";
const searchUrl = "https://animeme-api.herokuapp.com/api/anime";

let animes = [];

var DEFAULT_STATE = {
  animes
};

async function getAnime() {
  try {
    let res = await axios({
      url: searchUrl,
      method: "get",
      timeout: 1000,
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (res.status === 200) {
      console.log(res.status);
    }
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

getAnime().then(res => {
  let animeList = res.map(anime => {
    let current = {
      id: anime._id,
      titles: anime.titles,
      type: anime.type,
      synopsis: anime.synopsis,
      rating: anime.rating,
      status: anime.status,
      images: anime.images
    };
    return current;
  });
  animeList.forEach(anime => {
    animes.push(anime);
  });
});

export default function animeReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CREATE_ANIME:
      return {
        ...state,
        animes: [...state.animes, action.payload]
      };
    case UPDATE_ANIME:
      return {
        ...state,
        racers: state.animes.map((anime, index) => {
          if (index !== action.payload.id) {
            return anime;
          }
          return {
            ...anime,
            ...action.payload.updatedAnime
          };
        })
      };
    default:
      return state;
  }
}
