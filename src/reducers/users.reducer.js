import { ALL_USERS, USER_ANSWERS, USER_QUESTIONS } from '../actions/users';

const allUser = (state = {}, action) => {
    switch (action.type) {
        case ALL_USERS:
            return {
                ...state,
                ...action.users
            }
        case USER_QUESTIONS:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    questions: [...state[action.authedUser].questions, action.qid]
                }
            };
        case USER_ANSWERS:
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            };

        default:
            return state;
    }
}
export default allUser;