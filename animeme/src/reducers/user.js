import {
  CREATE_USER,
  UPDATE_USER,
  REMOVE_USER,
  SIGN_IN,
  SIGN_OUT
} from "../constants/userList.js";
import axios from "axios";
const searchUrl = "https://animeme-api.herokuapp.com/api/users/";

let users = [];

var DEFAULT_STATE = {
  currentUser: [],
  users,
  isLoggedIn: false
};

async function getUsers() {
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

getUsers().then(res => {
  let userList = res.map(user => {
    let current = {
      userName: user.userName,
      email: user.email,
      favorites: user.favorites,
      currentlyWatching: user.currentlyWatching
    };
    return current;
  });
  userList.forEach(user => {
    users.push(user);
  });
});

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
    case SIGN_IN: {
      return {
        ...state,
        isLoggedIn: true,
        currentUser: users.filter(user => {
          return user.email === action.payload.email;
        })
      };
    }
    case SIGN_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        currentUser: []
      };
    }
    default:
      return state;
  }
}
