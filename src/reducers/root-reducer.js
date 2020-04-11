import { combineReducers } from 'redux';
import setAuthedUser from './login.reducer';
import allUsers from './users.reducer';
import loadQuestionReducer from './loadQuestion.reducer';
import addQuestionReducer from './addQuestion.reducer';
import answerQuestionReducer from './answerQuestion.reducer';

export default combineReducers({
    setAuthedUser,
    allUsers,
    loadQuestionReducer,
    addQuestionReducer,
    answerQuestionReducer
})
