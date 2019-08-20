import {
    CREATE_USER,
    REMOVE_USER,
    UPDATE_USER
}  from '../constants/userList.js'

export function createNewUser(userName, password, email) {
    return {
        type: CREATE_USER,
        payload: {
            userName,
            password,
            email,
            favorites =[],
            currentlyWatching=[]
        }
    };
}

export const removeUser = id => ({
    type: REMOVE_USER, 
    payload: id
})

export const updateUser = (id, updatedUser) => ({
    type: UPDATE_USER,
    payload: {
        id,
        updatedUser
    }
})