import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

// Our worker Saga: will perform the fetch defects task
export function* fetchDefects() {
  try {
     const defects = yield call(AlmApi.query, 'defect');
     // => { CALL: {fn: AlmApi.query, args: ['defect']}}
     yield put({ type: "DEFECTS_RECEIVED", payload: defects });
     // => { PUT: {type: 'DEFECTS_RECEIVED', payload: defects} }
  } catch (error) {
     yield put({ type: "DEFECTS_RECEIVE_FAILED", error });
     // => { PUT: {type: 'DEFECTS_RECEIVE_FAILED', error: error} }
  }
}

// Our watcher Saga: spawn a new fetchDefects task on each FETCH_DEFECTS
export function* watchFetchDefects() {
  yield* takeEvery('FETCH_DEFECTS', fetchDefects);
}
