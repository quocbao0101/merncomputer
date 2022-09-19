import { apiBase } from "./instance";

const SearchUser = (data) => apiBase({
    url: '/users/search',
    method: 'POST',
    data
});


const userService = {
    SearchUser,
}

export default userService;