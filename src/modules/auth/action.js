import {
    LOGIN, LOGIN_ERROR, LOGIN_SUCCESS,
    REGISTER, REGISTER_ERROR, REGISTER_SUCCESS,
} from './constant';

const login = (data, checked, navigate) => ({
    type: LOGIN,
    data,
    checked,
    navigate,
});

export const loginSuccess = () => ({
    type: LOGIN_SUCCESS,
})

export const loginError = () => ({
    type: LOGIN_ERROR,
})

export const register = (data, navigate) => ({
    type: REGISTER,
    data,
    navigate,
})

export const registerSuccess = () => ({
    type: REGISTER_SUCCESS,
})

export const registerError = () => ({
    type: REGISTER_ERROR,
})



export default login;