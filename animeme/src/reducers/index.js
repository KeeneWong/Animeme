import { combineReducers } from "redux";
import animeReducer from "./anime.js";
import userReducer from "./user.js";

export default combineReducers({
  anime: animeReducer,
  users: userReducer
});
