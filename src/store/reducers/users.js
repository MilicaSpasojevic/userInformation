import { ADD_ACTIVE_USER, ADD_ALL_USERS, ADD_USERS_POSTS } from "../actions/users";

const initialState = {
    allUsers: {},
    activeUser: {},
    activeUserPosts: {}
}


export default (state=initialState, action)=> {
    switch(action.type){
        case ADD_ALL_USERS: {
            return {
                ...state,
                allUsers: action.users
            }
        };
        case ADD_ACTIVE_USER: {
            return{
                ...state,
                activeUser: action.user
            }
        };
        case ADD_USERS_POSTS: {
            return {
                ...state,
                activeUserPosts: action.posts
            }
        }
    }

    return state;
}