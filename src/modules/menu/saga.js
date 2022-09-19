import {
    put, takeLatest, all, call,
  } from 'redux-saga/effects';

import { OK } from '../../constants';
import menuService from '../../services/menu';
import { getMenuSuccess, } from './action';
import { GET_MENU} from './constant';

export function* getMenu() {
    try {
        const menu = yield call(menuService.getMenu);
        if(menu && menu.status === OK) {
            yield put(getMenuSuccess(menu.data.data));
        }
    } catch (error) {
        console.log(error);
    }
}


function* fetchLatestActionWatcher() {
    yield takeLatest(GET_MENU, getMenu);
  }
  
  export default function* menuSaga() {
    yield all([
      fetchLatestActionWatcher(),
    ]);
  }
  