import {
  ITERATION_CHANGE_REQUESTED,
  ITERATION_CHANGE_SUCCEEDED,
  ITERATION_CHANGE_FAILED
} from '../constants';

const iterationChangeRequested = (userStory, iteration) => {
  return {
    type: ITERATION_CHANGE_REQUESTED,
    payload: { userStory, iteration }
  };
};

export function changeIteration(userStory, iteration) {
  return (dispatch) => {
    dispatch(iterationChangeRequested(userStory, iteration));
    return fetch('/api/changeIteration', { body: '...' }).then(
      () => dispatch(iterationChangeSuceeded(userStory, iteration)),
      () => dispatch(iterationChangeFailed(userStory, iteration))
    );
  };
}
