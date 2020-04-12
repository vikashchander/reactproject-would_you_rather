const addQuestion = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_QUESTION':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
export default addQuestion;