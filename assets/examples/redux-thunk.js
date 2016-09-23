import { ITERATION_CHANGED } from '../constants';

const iterationChanged = (userStory, iteration) => {
  return {
    type: ITERATION_CHANGED,
    payload: {
      userStory,
      iteration
    }
  };
};

export function changeIteration(userStory, iteration) {
  return (dispatch) => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch(iterationChanged(userStory, iteration));
    }, 1000);
  };
}
