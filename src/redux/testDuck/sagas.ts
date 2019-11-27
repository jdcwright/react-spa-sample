import { takeLatest } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';

import { getTest } from './actions';
import { onGetTest } from './effects';

export function* getTestSaga() {
  yield takeLatest(getType(getTest), onGetTest);
}
