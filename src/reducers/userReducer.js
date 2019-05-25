import * as ActionTypes from '../constants/ActionTypes';
const initialState = [];

function findIndexById(arr, id) {
    var index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) index = i;
    }
    return index;
}

export default function userReducer(state = initialState, action) {
    var index;
    switch (action.type) {
        case ActionTypes.FETCH_USER:
            state = action.payload;
            return [...state];
        case ActionTypes.ADD_USER:
            state = [...state, action.payload]
            return [...state];
        case ActionTypes.DEL_USER:
            index = findIndexById(state, action.payload);
            state.splice(index, 1);
            return [...state];
        case ActionTypes.UPDATE_USER:
            index = findIndexById(state, action.payload.id);
            state[index] = {
                ...state[index],
                username: action.payload.username,
                name: action.payload.name
            }
            return [...state];
        default:
            return [...state];
    }
}