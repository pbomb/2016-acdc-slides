import { ITERATION_CHANGED } from "../constants";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case ITERATION_CHANGED:
      const { userStory, iteration } = action.payload;
      return {
        ...state,
        [userStory.get("id")]: iteration
      };
  }
  return state;
}
