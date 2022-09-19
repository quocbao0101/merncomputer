import {
    GET_MENU,
    GET_MENU_ERROR,
    GET_MENU_SUCCESS,
} from './constant'

const initialState = {
    menu: [],
    error: false,
    loading: false,
}

const reducer = (state = initialState, { type, data, key}) => {
    switch(type) {
        case GET_MENU:
            return {
                ...state,
                loading: true,
            };
        case GET_MENU_SUCCESS:
            return {
                ...state,
                menu: data,
                loading: false,
            };
        default:
            return state;
    }
}
export default reducer;