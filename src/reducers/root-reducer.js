import { combineReducers } from 'redux';
import loginReducer from './login.reducer';
import allUsersReducer from './users.reducer';

export default combineReducers({
    userAuth: loginReducer,
    allUser: allUsersReducer
})
