import { combineReducers } from 'redux';
import users from './userReducer';
import taskEditting from './taskEditting';

export default combineReducers({
    users,
    taskEditting,
    
});

