export const ADD_ALL_USERS = 'ADD_ALL_USERS'
export const ADD_ACTIVE_USER = 'ADD_ACTIVE_USER'
export const ADD_USERS_POSTS = 'ADD_USERS_POSTS'


export const addAllUsers = (u) => {
    return {type: ADD_ALL_USERS, users: u}
}

export const addActiveUser = (u) => {
    return {type: ADD_ACTIVE_USER, user: u}
}

export const addUsersPosts = (p) => {
    return {type: ADD_USERS_POSTS, posts: p}
}