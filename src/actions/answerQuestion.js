import { userAnweredQuestions } from './users';

export const ANSWER_QUESTION = "ANSWER_QUESTION";

function answerQuestion({ authedUser, qid, answer }) {
    return {
        type: ANSWER_QUESTION,
        payload: {
            authedUser,
            qid,
            answer
        }
    };
}

export function handleAnswerQuestion({ authedUser, qid, answer }) {
    return dispatch => {
        return saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
            dispatch(answerQuestion({ authedUser, qid, answer }));
            dispatch(userAnweredQuestions({ authedUser, qid, answer }));
        });
    };
}