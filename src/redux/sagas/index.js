import { all, fork } from 'redux-saga/effects';

import auth from './auth';
import trails from './trails';
function* rootSaga() {
  yield all([fork(auth),fork(trails)]);
}

export default rootSaga;
