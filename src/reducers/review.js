import { SET_REVIEW, ADD_FILTER, REMOVE_FILTER } from '../actions';

const default_state = {
  filters: [],
  items: []
};

function Review(state = default_state, action) {
  switch (action.type) {
    case REMOVE_FILTER:
      return {
        ...state,
        filters: state.filters.filter(filter => !(
          filter.type === action.filter.type
          && filter.value === action.filter.value
        ))
      };
    case ADD_FILTER:
      const filterExists = state.filters.find(filter => (
        filter.type === action.filter.type
        && filter.value === action.filter.value
      ));
      return filterExists ? state : {
        ...state,
        filters: [...state.filters, action.filter]
      };
    case SET_REVIEW:
      return {
        ...state,
        items: action.items
      };
    default:
      return state
  }
}

export default Review;