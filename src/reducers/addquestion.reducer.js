import { ADD_QUESTION } from '../actions/addQuestion';

const addQuestion = (state = {}, action) => {
    switch (action.type) {
        case ADD_QUESTION:
            const { question } = action;
            return { ...state, [question.id]: question };
        default:
            return state
    }
}
export default addQuestion;