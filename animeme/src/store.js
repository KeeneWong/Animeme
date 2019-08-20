import { createStore } from "redux";
import combine from "./reducers/index.js";

export default createStore(combine);
