import { SEARCH_USER, SEARCH_USER_SUCCESS } from "./constant";

const searchUser = (data) => ({
    type: SEARCH_USER,
    data,
});

export const searchUserSuccess = (data) => ({
    type: SEARCH_USER_SUCCESS,
    data,
})

export default searchUser;