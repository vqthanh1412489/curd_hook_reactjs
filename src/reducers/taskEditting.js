import * as ActionTypes from '../constants/ActionTypes';
const initialState = {};

export default function taskEdittingReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_TASKEDITTING:
            state = action.payload;
            return {...state};
        default:
            return {...state};
    }
}