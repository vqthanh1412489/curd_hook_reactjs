import { ADD_USER, FETCH_USER, DEL_USER, UPDATE_USER
    ,
    SET_TASKEDITTING

} from '../constants/ActionTypes';

import { fetchUsers, addUser, delUser, updateUser } from '../services';

export const actFetchUsersRequest = () => {
    return dispatch => {
        return fetchUsers()
            .then(res => {
                dispatch(actFetchUsers(res.data));
            })
            .catch(err => console.log(err));
    }
}

export const actFetchUsers = (users) => {
    return {
        type: FETCH_USER,
        payload: users
    }
}
export const actAddUsersRequest = (user) => {
    return dispatch => {
        return addUser(user)
            .then(res => {
                dispatch(actAddUsers(res.data));
            })
            .catch(err => console.log(err));
    }
}

export const actAddUsers = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const actDelUserRequest = (id) => {
    return dispatch => {
        return delUser(id)
            .then(res => {
                dispatch(actDelUser(id));
            })
            .catch(err => console.log(err));
    }
}

export const actDelUser = (id) => {
    return {
        type: DEL_USER,
        payload: id
    }
}

export const actUpdateUserRequest = (id, user) => {
    return dispatch => {
        return updateUser(id, user)
            .then(res => {
                dispatch(actUpdateUser(res.data));
            })
            .catch(err => console.log(err));
    }
}

export const actUpdateUser = (user) => {
    return {
        type: UPDATE_USER,
        payload: user
    }
}
export const actSetTaskEditting = (task) => {
    return {
        type: SET_TASKEDITTING,
        payload: task
    }
}