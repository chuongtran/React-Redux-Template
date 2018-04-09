import configs from 'configs';
import { call, put, } from 'redux-saga/effects';
import { takeLatest, delay } from 'redux-saga';

import TestService from './services/TestService';
import {
  QUERY_TEST,
  QUERY_TEST_SUCCESS,
  QUERY_TEST_ERROR
} from './constants';
import { querySuccess, queryError } from './actions';

function* query() {
  console.log('query');
  yield takeLatest(QUERY_TEST, doQuery);
}
function* doQuery(action) {
  // const { param1, param2 } = action;
  // const response = yield (TestService.query, null);
  // if (!response || response.error) {
  //   yield put(queryError());
  //   return;
  // }
  // const { data } = response;
  // if (!data) {
  //     yield put(queryError(null));
  //     return;
  // }
  // yield put(querySuccess(data));
  // const { timeout, otherCall } = yield race({
  //   timeout: call(delay, 5000),
  //   otherCall: put(querySuccess())
  // })

  yield delay(5000);
  yield put(querySuccess());
}

export default [
  query
];
