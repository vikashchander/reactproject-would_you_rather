import { getInitialData } from "../utils/Api";
import { allUsers } from "./users";


export const handleInitialData = () => dispatch => {
    return getInitialData().then(({ users }) => {
        dispatch(allUsers(users));
    });
};
