import { saveQuestion } from '../utils/Api';

export const ADD_QUESTION = 'ADD_QUESTION';

export default addQuestion({ question }){
    return {
        type: ADD_QUESTION,
        question
    }
};

export function handleAddQuestion({ optionOneText, optionTwoText, author }) {
    return saveQuestion({ optionOneText, optionTwoText, author }).then(
        question => {
            //dispatch(userAddedQuestion({ authedUser: author, qid: question.id }));
            dispatch(addQuestion({ question }));
        }
    );
};
