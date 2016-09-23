export function* fetchDefects() {
  const defects = yield call(AlmApi.query, 'defect'); // => { CALL: {fn: AlmApi.query, args: ['defect']}}
  yield put({ type: 'DEFECTS_RECEIVED', payload: defects }); // => { PUT: {type: 'DEFECTS_RECEIVED', payload: defects} }
}

test('fetchDefects Saga test', () => {
  const defects = [{ Name: 'Very bug. Many scare.' }];
  const gen = fetchDefects();

  expect(gen.next().value).toEqual(call(AlmApi.query, 'defect'));
  expect(gen.next(defects).value).toEqual(put({ type: 'DEFECTS_RECEIVED', payload: defects }));
  expect(gen.next()).toEqual({ done: true, value: undefined });
});
