const loadQuestionReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_QUESTIONS':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
export default loadQuestionReducer;