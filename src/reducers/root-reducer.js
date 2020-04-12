import { combineReducers } from 'redux';
import setAuthedUser from './login.reducer';
import allUsers from './users.reducer';
import loadQuestion from './loadQuestion.reducer';
import addQuestion from './addQuestion.reducer';
import answerQuestion from './answersQuestion.reducer';

export default combineReducers({
    setAuthedUser,
    allUsers,
    loadQuestion,
    addQuestion,
    answerQuestion
})
