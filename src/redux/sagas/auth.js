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
    const { data: payload } = yield call(api.login, action);
    yield put({ type: constants.AUTH_LOGIN.SUCCESS, payload });

    // eslint-disable-next-line
    action.success && action.success(payload);
  } catch (e) {
    yield put({
      type: constants.AUTH_LOGIN.FAILED,
      message: e.response.data.message,
    });
    notification.error({
      message: e.response.data.message,
    });

    // eslint-disable-next-line
    action.error && action.error();
  }
}

function* sigin(action) {
  try {
    const { data: payload } = yield call(api.signin, action);
    yield put({ type: constants.AUTH_SIGNIN.SUCCESS, payload });

    // eslint-disable-next-line
    action.success && action.success(payload);
  } catch (e) {
    yield put({
      type: constants.AUTH_SIGNIN.FAILED,
      message: e.response.data.message,
    });
    notification.error({
      message: e.response.data.message,
    });

    // eslint-disable-next-line
    action.error && action.error();
  }
}

function* logout() {
  yield put({ type: 'LOGOUT' });
  yield call(persistor.purge);
}

// Watchers Sagas

function* watchLogin() {
  yield takeEvery(constants.AUTH_LOGIN.ACTION, login);
}


function* watchSignup() {
  yield takeEvery(constants.AUTH_SIGNIN.ACTION, sigin);
}

function* watchLogout() {
  yield takeLatest(constants.AUTH_LOGOUT, logout);
}

/**
 * Export the root saga by forking all available sagas.
 */
export default function* rootAuth() {
  yield all([fork(watchLogin), fork(watchLogout), fork(watchSignup)]);
}
