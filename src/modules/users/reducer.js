import {
    SEARCH_USER,
    SEARCH_USER_SUCCESS,
} from './constant'

const initialState = {
    user: [],
    error: false,
    loading: false,
}

const reducer = (state = initialState, { type, data }) => {
    switch(type) {
        case SEARCH_USER:
            return {
                ...state,
                loading: true,
            }
        case SEARCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: data,
            }
        default:
            return state;
    }
}
export default reducer;