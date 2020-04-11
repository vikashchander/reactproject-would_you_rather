export const ALL_USERS = 'ALL_USERS';
export const USER_ANSWERS = 'USER_ANSWERS';
export const USER_QUESTIONS = 'USER_QUESTIONS';


export function allUsers(users) {
    return {
        type: ALL_USERS,
        payload: users
    }
}

export function userAskedQuestions({ authedUser, qid }) {
    return {
        type: USER_QUESTIONS,
        payload: { authedUser, qid }
    }
}
export function userAnweredQuestions({ authedUser, qid, answer }) {
    return {
        type: USER_ANSWERS,
        payload: { authedUser, qid, answer }
    }
}