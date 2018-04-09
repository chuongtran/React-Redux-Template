import { fromJS } from 'immutable';
import {
  QUERY_TEST,
  QUERY_TEST_SUCCESS,
  QUERY_TEST_ERROR
} from './constants';

const initialState = fromJS({
  querying: false,
  message: null
});

function appReducer(state = initialState, action) {
  switch (action.type) {
  case QUERY_TEST: 
    return state
            .set('querying', true)
  case QUERY_TEST_SUCCESS:
    return state
            .set('querying', false)
            .set('message', 'SUCCESS')
  case QUERY_TEST_ERROR:
    return state
            .set('querying', false)
            .set('message', 'FALSE')
  default:
    return state;
  }
}

export default appReducer;
