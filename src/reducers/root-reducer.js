import { combineReducers } from 'redux';
import setAuthedUser from './login.reducer';
import allUsers from './users.reducer';
import loadQuestion from './loadQuestion.reducer';

export default combineReducers({
    setAuthedUser,
    allUsers,
    loadQuestion,
})
