import {
    GET_PRODUCTS,
    GET_PRODUCTS_PAGINATION, GET_PRODUCTS_PAGINATION_ERROR, GET_PRODUCTS_PAGINATION_SUCCESS, GET_PRODUCTS_SUCCESS,

} from './constant'

const initialState = {
    product: [],
    data: [],
    error: false,
    loading: false,
}

const reducer = (state = initialState, { type, data, key}) => {
    switch(type) {
        case GET_PRODUCTS:
        case GET_PRODUCTS_PAGINATION:
            return {
                ...state,
                loading: true,
            };
        case GET_PRODUCTS_PAGINATION_SUCCESS:
            return {
                ...state,
                product: data.data,
                loading: false,
            };
        case GET_PRODUCTS_PAGINATION_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
            };
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                data: data.data,
                loading: false,
            }
        default:
            return state;
    }
}
export default reducer;