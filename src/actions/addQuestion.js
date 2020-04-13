import { saveQuestion } from '../utils/Api';
import { userAskedQuestions } from './users';

export const ADD_QUESTION = 'ADD_QUESTION';

function addQuestion({ question }) {
    return {
        type: ADD_QUESTION,
        question
    };
}

export function handleAddQuestion({ optionOneText, optionTwoText, author }) {
    return dispatch => {
        return saveQuestion({ optionOneText, optionTwoText, author }).then(
            question => {
                dispatch(userAskedQuestions({ authedUser: author, qid: question.id }));
                dispatch(addQuestion({ question }));
            }
        );
    }
};
