import { userAnweredQuestions } from './users';
import { saveQuestionVotes } from '../utils/Api'

export const ANSWER_QUESTION = "ANSWER_QUESTION";

function answerQuestion({ authedUser, qid, answer }) {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        answer

    };
}

export function handleAnswerQuestion({ authedUser, qid, answer }) {
    return dispatch => {
        return saveQuestionVotes({ authedUser, qid, answer }).then(() => {
            dispatch(answerQuestion({ authedUser, qid, answer }));
            dispatch(userAnweredQuestions({ authedUser, qid, answer }));
        });
    };
}