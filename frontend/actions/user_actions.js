import * as APIUtil from "../util/user_api_util";

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user,
})

export const fetchUser = id => dispatch => {
    return APIUtil.getUser(id).then(user => (
        dispatch(receiveUser(user))
    ))
}

export const updateUser = (id, user) => dispatch => {
    return APIUtil.patchUser(id, user).then(user => (
        dispatch(receiveUser(user))
    ))
}