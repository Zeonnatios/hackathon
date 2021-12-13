import { notification } from 'antd';
import { all, fork, call, put, takeEvery } from 'redux-saga/effects';

import { constants } from '../modules/trails';
import * as api from '../api/trails';
// eslint-disable-next-line

// GET_ALL_TRAILS

function* getAllTrails() {
  try {
    const { data: payload } = yield call(api.allTrails);
    yield put({ type: constants.GET_ALL_TRAILS.SUCCESS, payload });
  } catch (e) {
    yield put({
      type: constants.GET_ALL_TRAILS.FAILED,
      message: e.response.data.message,
    });
    notification.error({
      message: e.response.data.message,
    });
  }
}

function* getTrailsByTechnology(action) {
  try {
    const { data: payload } = yield call(
      api.trailsByTechnology,
      action.technology,
    );
    yield put({ type: constants.GET_TRAILS_BY_TECHNOLOGY.SUCCESS, payload });
  } catch (e) {
    yield put({
      type: constants.GET_TRAILS_BY_TECHNOLOGY.FAILED,
      message: e.response.data.message,
    });
    notification.error({
      message: e.response.data.message,
    });
  }
}

function* getAllTechnologies() {
  try {
    const { data: payload } = yield call(api.allTechnologies);
    yield put({ type: constants.GET_ALL_TECHNOLOGIES.SUCCESS, payload });
  } catch (e) {
    yield put({
      type: constants.GET_ALL_TECHNOLOGIES.FAILED,
      message: e.response.data.message,
    });
    notification.error({
      message: e.response.data.message,
    });
  }
}

// Watchers Sagas

function* watchGetAllTrails() {
  yield takeEvery(constants.GET_ALL_TRAILS.ACTION, getAllTrails);
}

function* watchGetTrailsByTechnology() {
  yield takeEvery(
    constants.GET_TRAILS_BY_TECHNOLOGY.ACTION,
    getTrailsByTechnology,
  );
}

function* watchGetAllTechnologies() {
  yield takeEvery(constants.GET_ALL_TECHNOLOGIES.ACTION, getAllTechnologies);
}

/**
 * Export the root saga by forking all available sagas.
 */
export default function* rootAuth() {
  yield all([
    fork(watchGetAllTrails),
    fork(watchGetAllTechnologies),
    fork(watchGetTrailsByTechnology),
  ]);
}
