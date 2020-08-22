import { SET_REVIEW } from '../actions';

const default_state = {
  filters: [],
  items: []
};

function Review(state = default_state, action) {
  switch (action.type) {
    case SET_REVIEW:
      return {
        ...state,
        items: action.items
      }
    default:
      return state
  }
}

export default Review;