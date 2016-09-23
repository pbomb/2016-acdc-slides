import {
  FETCH,
  ITERATION_CHANGE_FAILED,
  ITERATION_CHANGE_REQUESTED,
  ITERATION_CHANGE_SUCCEEDED
} from '../constants';

const iterationChangeRequested = (userStory, iteration) => {
  return {
    type: ITERATION_CHANGE_REQUESTED,
    payload: { userStory, iteration }
  };
};

export function changeIteration(userStory, iteration) {
  return {
    type: FETCH,
    meta: {
      callAPI: () => fetch('/api/changeIteration', { body: '...' }),
      requestAction: () => iterationChangeRequested(userStory, iteration),
      successAction: () => iterationChangeSuceeded(userStory, iteration),
      failureAction: () => iterationChangeFailed(userStory, iteration)
    }
  };
}
