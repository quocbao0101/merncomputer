import {
    put, takeLatest, all, call,
  } from 'redux-saga/effects';

import { OK } from '../../constants';
import { SEARCH_USER } from './constant';
import userService from '../../services/user';
import { searchUserSuccess } from './action';

export function* searchUser({ data }) {
    try {
        const user = yield call(userService.SearchUser, data);
        if(user && user.status === OK) {
            yield put(searchUserSuccess(user.data));
        }
    } catch (error) {
        console.log(error);
    }
}


function* fetchLatestActionWatcher() {
    yield takeLatest(SEARCH_USER, searchUser);
  }
  
  export default function* userSaga() {
    yield all([
      fetchLatestActionWatcher(),
    ]);
  }
  