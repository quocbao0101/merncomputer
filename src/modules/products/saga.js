import {
    put, takeLatest, all, call,
  } from 'redux-saga/effects';

import { OK } from '../../constants';
import productService from '../../services/products';
import { getProductPaginationSuccess, getProductsSuccess } from './action';
import { GET_PRODUCTS, GET_PRODUCTS_PAGINATION, GET_PRODUCTS_PAGINATION_SUCCESS } from './constant';

export function* getProductPagination(value) {
    try {
        const products = yield call(productService.getProductPagination, value.data);
        if(products.status === OK) {
            yield put(getProductPaginationSuccess(products));
        }
    } catch (error) {
        console.log(error);
    }
}

export function* getProduct() {
    try {
        const product = yield call(productService.getProduct);
        if(product.status === OK)
        {
            yield put(getProductsSuccess(product));
        }
    } catch (error) {
        console.log(error);
    }
}

function* fetchLatestActionWatcher() {
    yield takeLatest(GET_PRODUCTS_PAGINATION, getProductPagination);
    yield takeLatest(GET_PRODUCTS, getProduct);
  }
  
  export default function* productSaga() {
    yield all([
      fetchLatestActionWatcher(),
    ]);
  }
  