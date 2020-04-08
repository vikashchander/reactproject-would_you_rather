import { getInitialData } from '../utils/Api';

const INITIAL_STATE = {
    allUsers: {}
}

const allUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ALL_USERS':
            return {
                ...state,
                allUsers: { ...action.payload }
            }
        default:
            return state
    }
}
export default allUserReducer;