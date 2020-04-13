export const SET_AUTHED_USER = "SET_STATE_USER";

export function setAuthedUser(user) {
    return {
        type: SET_AUTHED_USER,
        payload: user
    };
}
