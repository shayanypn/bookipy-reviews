import { SET_REVIEW, ADD_FILTER, REMOVE_FILTER, SET_PAGES } from '../actions';

const default_state = {
  total: 1,
  page: 1,
  pages: [],
  filters: [],
  items: []
};

function Review(state = default_state, action) {
  switch (action.type) {
    case SET_PAGES:
      const links = action.pages.split(',')
        .filter(item => item)
        .map(item => {
          const link = item.split(';'),
          num = (new URLSearchParams(link[0].match("<(.*)>")[1]).get('_page'));
          return {
            num: parseInt(num, 10),
            text: link[1].match('rel="(.*)"')[1]
          };
        });
      let hasCurrent = links.some(link => link.num === action.current);
      const pages = links.reduce((ary, link) => {
        if (!hasCurrent && link.num > action.current) {
          hasCurrent = true;
          return [...ary, {
            num: action.current,
            text: `${action.current}/${links[links.length - 1].num}`
          }, link];
        }
        return [...ary, link];
      }, []);

      return {
        ...state,
        total: parseInt(action.totalItems, 10),
        page: action.current,
        pages: pages
      };
    case REMOVE_FILTER:
      return {
        ...state,
        filters: state.filters.filter(filter => !(
          filter.type === action.filter.type
          && filter.value === action.filter.value
        ))
      };
    case ADD_FILTER:
      const filterExists = state.filters.some(filter => (
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