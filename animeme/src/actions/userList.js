import {
  CREATE_USER,
  REMOVE_USER,
  UPDATE_USER,
  SIGN_IN,
  SIGN_OUT
} from "../constants/userList.js";

export function createNewUser(email, userName, password) {
  return {
    type: CREATE_USER,
    payload: {
      userName,
      password,
      email,
      favorites: [],
      currentlyWatching: []
    }
  };
}

export const removeUser = id => ({
  type: REMOVE_USER,
  payload: id
});

export const updateUser = (id, updatedUser) => ({
  type: UPDATE_USER,
  payload: {
    id,
    updatedUser
  }
});

export const signIn = email => ({
  type: SIGN_IN,
  payload: {
    email: email
  }
});

export const signOut = () => ({
  type: SIGN_OUT
});
