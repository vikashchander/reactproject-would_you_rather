import { All_QUESTIONS } from '../actions/loadQuestion';
import { ADD_QUESTION } from '../actions/addQuestion';
import { ANSWER_QUESTION } from '../actions/answerQuestion';

const loadQuestion = (state = {}, action) => {
    switch (action.type) {
        case All_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
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
        case ADD_QUESTION:
            const { question } = action;
            return { ...state, [question.id]: question };
        default:
            return state
    }
}
export default loadQuestion;