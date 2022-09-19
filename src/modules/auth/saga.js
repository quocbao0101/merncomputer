import {
    put, takeLatest, all, call,
  } from 'redux-saga/effects';

import { OK, USER_REMEMBER_LOCAL_STORE } from '../../constants';
import authService from '../../services/auth';
import { loginError, loginSuccess, registerError, registerSuccess } from './action';
import { LOGIN, REGISTER } from './constant';

export function* login(data) {
    try {
        const users = yield call(authService.login, data.data);
        const email = data.data.email;
        const password = data.data.password;
        const { navigate } = data;
          if(users && users.status === OK) {
            authService.updateUser(users.data.data);
            localStorage.setItem(USER_REMEMBER_LOCAL_STORE, data.checked ? JSON.stringify({
              email,
              password
            }) : null )
            yield put(loginSuccess());
            navigate('/');
        }
    } catch (error) {
        yield put(loginError());
    }
}

export function* register(data) {
  try {
    const user = yield call(authService.register, data.data);
    const { navigate } = data;
    if (user && user.status === OK) {
      yield put(registerSuccess());
    }
    navigate('/dang-nhap');
  } catch (error) {
    yield put(registerError());
  }
}

function* fetchLatestActionWatcher() {
    yield takeLatest(LOGIN, login);
    yield takeLatest(REGISTER, register);
  }
  
  export default function* authSaga() {
    yield all([
      fetchLatestActionWatcher(),
    ]);
  }
  