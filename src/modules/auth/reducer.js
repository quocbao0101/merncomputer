import {
    LOGIN,
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    REGISTER,
    REGISTER_ERROR,
    REGISTER_SUCCESS,
} from './constant'

const initialState = {
    loading: false,
}

const reducer = (state = initialState, { type, data }) => {
    switch(type) {
        case REGISTER:
        case LOGIN:
            return {
                ...state,
                loading: true,
            };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case REGISTER_ERROR:
        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}
export default reducer;