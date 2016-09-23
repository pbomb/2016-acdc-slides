import { FETCH } from '../constants';

export default ({ dispatch, getState }) => next => action => {
  if (!action.meta || action.type !== FETCH) {
    return next(action);
  }

  const state = getState();
  const {
    callAPI, requestAction, successAction, failureAction
  } = action.meta;

  dispatch(requestAction(state));

  return callAPI(state).then(
    response => successAction(response, getState()),
    error => failureAction(error, getState())
  );
};
