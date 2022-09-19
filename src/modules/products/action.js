import {
    GET_PRODUCTS,
    GET_PRODUCTS_PAGINATION, GET_PRODUCTS_PAGINATION_ERROR, GET_PRODUCTS_PAGINATION_SUCCESS, GET_PRODUCTS_SUCCESS
} from './constant'

const getProductPagination = (data) => ({
    type: GET_PRODUCTS_PAGINATION,
    data,
})
export const getProductPaginationSuccess = (data) => ({
    type: GET_PRODUCTS_PAGINATION_SUCCESS,
    data,
})

export const getProducts = () => ({
    type: GET_PRODUCTS,
})

export const getProductsSuccess = (data) => ({
    type: GET_PRODUCTS_SUCCESS,
    data
})

export default getProductPagination;