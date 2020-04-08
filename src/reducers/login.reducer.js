const INITIAL_STATE = {
    currentUser: null
}

const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_STATE_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
    }
}
export default loginReducer;