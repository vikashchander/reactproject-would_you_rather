import { combineReducers } from 'redux';
import login from './login.reducer';
import allUsers from './users.reducer';

export default combineReducers({
    login,
    allUsers
})
