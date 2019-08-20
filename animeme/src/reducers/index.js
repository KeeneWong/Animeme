import { combineReducers as combine } from "redux";
import { animeReducer as anime } from "./anime.js";
import { userReducer as user } from "./user.js";

export default combine({
  anime,
  user
});
