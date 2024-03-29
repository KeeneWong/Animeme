import {
  CREATE_USER,
  UPDATE_USER,
  REMOVE_USER,
  SIGN_IN,
  SIGN_OUT,
  ADD_FAVORITE,
  REMOVE_FAVORITE
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
      id: user._id,
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
      async function addUser() {
        await axios
          .post("https://animeme-api.herokuapp.com/api/users/signup", {
            userName: action.payload.userName,
            email: action.payload.email,
            password: action.payload.password
          })
          .then(response => {
            alert(`a user has been signup`);
          })
          .catch(err => {
            alert(`Invaild information`);
            console.log(err);
          });
      }
      addUser();
      return {
        ...state,
        isLoggedIn: true,
        users: [...state.users, action.payload],
        currentUser: users.filter(user => {
          return user.email === action.payload.email;
        })
      };
    case UPDATE_USER:
      console.log(action.payload);
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
      getUsers().then(res => {
        let userList = res.map(user => {
          let current = {
            id: user._id,
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
      let temp = users.filter(user => {
        return user.email === action.payload.email;
      });
      return {
        ...state,
        isLoggedIn: true,
        currentUser: temp[0]
      };
    }
    case SIGN_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        currentUser: []
      };
    }
    case ADD_FAVORITE: {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          favorites: [...state.currentUser.favorites, action.payload.id]
        }
      };
    }
    case REMOVE_FAVORITE: {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          favorites: action.payload.arr
        }
      };
    }
    default:
      return state;
  }
}
