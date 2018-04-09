import {
  QUERY_TEST,
  QUERY_TEST_SUCCESS,
  QUERY_TEST_ERROR
} from './constants';

export function query() {
  return { type: QUERY_TEST };
}

export function querySuccess(authToken) {
  return { type: QUERY_TEST_SUCCESS, authToken };
}

export function queryError(error) {
  return { type: QUERY_TEST_ERROR, error };
}