import { getInitialData } from "../utils/Api";
import { allUsers } from "./users";
import { allQuestions } from './loadQuestion';

export const handleInitialData = () => dispatch => {
    return getInitialData().then(({ users, questions }) => {
        dispatch(allUsers(users));
        dispatch(allQuestions(questions));
    });
};
