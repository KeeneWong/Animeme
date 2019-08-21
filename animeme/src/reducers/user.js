import {
  CREATE_USER,
  UPDATE_USER,
  REMOVE_USER,
  SIGN_IN
} from "../constants/userList.js";
import axios from "axios";
const loginUrl = "https://animeme-api.herokuapp.com/api/users/login";

let users = [];

var DEFAULT_STATE = {
  users,
  isLoggedIn: false
};

async function login(email, password) {
  try {
    let res = await axios({
      url: loginUrl,
      method: "post",
      timeout: 1000,
      headers: {
        "Content-Type": "application/json"
      },
      email: email,
      password: password
    });
    if (res.status === 200) {
      console.log(res.status);
    }
    return res.data;
  } catch (err) {
    console.error(err);
  }
}

// getUsers().then(res => {
//   let userList = res.map(user => {
//     let current = {
//       userName: user.userName,
//       password: user.password,
//       email: user.password,
//       favorites: user.favorites,
//       currentlyWatching: user.currentlyWatching
//     };
//     return current;
//   });
//   userList.forEach(user => {
//     users.push(user);
//   });
// });

export default function userReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user, index) => {
          if (index !== action.payload.id) {
            return user;
          }
          return {
            ...user,
            ...action.payload.updatedUser
          };
        })
      };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user, id) => {
          return id !== action.payload;
        })
      };
    case SIGN_IN:
      return {};
    default:
      return state;
  }
}
