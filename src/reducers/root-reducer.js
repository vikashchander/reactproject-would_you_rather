import { combineReducers } from 'redux';
import setAuthedUser from './login.reducer';
import allUsers from './users.reducer';

export default combineReducers({
    setAuthedUser,
    allUsers
})
