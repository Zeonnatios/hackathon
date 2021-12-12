import { notification } from 'antd';
import {
  all,
  fork,
  call,
  put,
  takeLatest,
  takeEvery,
} from 'redux-saga/effects';

import { constants } from '../modules/auth';
import * as api from '../api/auth';
// eslint-disable-next-line
import { persistor } from '../store';

// LOGIN
function* login(action) {
  try {
    const payload = yield call(api, action);
    yield put({ type: constants.AUTH_LOGIN.SUCCESS, payload });

    // eslint-disable-next-line
    action.success && action.success(payload);
  } catch (e) {
    yield put({
      type: constants.AUTH_LOGIN.FAILED,
      message: e.message || e,
    });
    notification.error({
      message: 'Problemas no Login: usuário ou senha inválidos',
    });

    // eslint-disable-next-line
    action.error && action.error();
  }
}

function* watchLogin() {
  yield takeEvery(constants.AUTH_LOGIN.ACTION, login);
}

// LOGOUT
function* logout() {
  yield put({ type: 'LOGOUT' });
  yield call(persistor.purge);
}

function* watchLogout() {
  yield takeLatest(constants.AUTH_LOGOUT, logout);
}

/**
 * Export the root saga by forking all available sagas.
 */
export default function* rootAuth() {
  yield all([fork(watchLogin), fork(watchLogout)]);
}
