export const SET_STATE_USER = "SET_STATE_USER";

export function setAuthedUser(user) {
    return {
        type: SET_STATE_USER,
        payload: { ...user }
    };
}
