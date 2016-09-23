import { FETCH } from '../constants';
import { startSpan } from '../ClientMetrics';

export default ({ dispatch, getState }) => next => action => {
  if (!action.meta || action.type !== FETCH) {
    return next(action);
  }

  const state = getState();
  const {
    callAPI, component, description, requestAction, successAction, failureAction
  } = action.meta;

  const span = startSpan({ component, description });
  dispatch(requestAction(state));

  return callAPI(state).then(
    response => {
      span.end();
      return successAction(response, getState());
    },
    error => {
      span.end();
      return failureAction(error, getState());
    }
  );
};
