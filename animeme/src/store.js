import { createStore } from "redux";
import combine from "./reducers/index.js";

export default createStore(
  combine,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
