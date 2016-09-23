import { ITERATION_CHANGED } from '../constants';

export function changeIteration(userStory, iteration) {
  return {
    type: ITERATION_CHANGED,
    payload: {
      userStory,
      iteration
    }
  };
}
