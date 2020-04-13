import { ANSWER_QUESTION } from '../actions/answerQuestion';
const answerQuestion = (state = {}, action) => {
    switch (action.type) {
        case ANSWER_QUESTION:
            const { authedUser, qid, answer } = action;
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: [...state[qid][answer].votes, authedUser]
                    }
                }
            }
        default:
            return state
    }
}
export default answerQuestion;