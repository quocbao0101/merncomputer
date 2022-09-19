import { all, fork } from 'redux-saga/effects';
import productSaga from './modules/products/saga';
import menuSaga from './modules/menu/saga';
import authSaga from './modules/auth/saga';

const RootSagas = function* _() {
    yield all([
        fork(productSaga),
        fork(menuSaga),
        fork(authSaga),
    ]);
};

export default RootSagas;