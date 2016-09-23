import { call, put } from 'redux-saga/effects'

export function* fetchDefects(action) {
   try {
      const defects = yield call(AlmApi.query, 'defect')
      yield put({ type: "DEFECTS_RECEIVED", payload: defects })
   } catch (error) {
      yield put({ type: "DEFECTS_RECEIVE_FAILED", error })
   }
}
