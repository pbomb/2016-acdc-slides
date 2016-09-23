import { effectsMiddleware } from 'redux-effex';

// Our worker Saga: will perform the fetch defects task
export async function fetchDefects({action, dispatch, getState}) {
  try {
     const defects = await AlmApi.query('defect');
     dispatch({ type: "DEFECTS_RECEIVED", payload: defects });
  } catch (error) {
     dispatch({ type: "DEFECTS_RECEIVE_FAILED", error });
  }
}

export const effects = effectsMiddleware([
  { action: FETCH_DEFECTS, effect: fetchDefects }
]);
