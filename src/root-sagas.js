import { all, fork } from 'redux-saga/effects';
import productSaga from './modules/products/saga';
import menuSaga from './modules/menu/saga';
import authSaga from './modules/auth/saga';
import userSaga from './modules/users/saga';

const RootSagas = function* _() {
    yield all([
        fork(productSaga),
        fork(menuSaga),
        fork(authSaga),
        fork(userSaga),
    ]);
};

export default RootSagas;