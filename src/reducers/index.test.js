import reducer from './index';
import { SET_REVIEW, ADD_FILTER, REMOVE_FILTER, SET_PAGES } from '../actions';

describe('review reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      total: 1,
      page: 1,
      pages: [],
      filters: [],
      items: []
    })
  })

  it('should handle SET_PAGES', () => {
    expect(
      reducer(undefined, {
        type: SET_PAGES,
        current: 1,
        totalItems: '30',
        pages: "<http://interview-task-api.bookiply.io/reviews?_limit=5&_page=1>; rel=\"first\", <http://interview-task-api.bookiply.io/reviews?_limit=5&_page=2>; rel=\"next\", <http://interview-task-api.bookiply.io/reviews?_limit=5&_page=6>; rel=\"last\""
      })
    ).toEqual({
      items: [],
      filters: [],
      total: '30',
      page: 1,
      pages: [
        {num:1, text: 'first'},
        {num:2, text: 'next'},
        {num:6, text: 'last'}
      ]
    });
  });

  it('should handle SET_REVIEW', () => {
    expect(
      reducer(undefined, {
        type: SET_REVIEW,
        items: [{}]
      })
    ).toEqual({
      items: [{}],
      filters: [],
      total: 1,
      page: 1,
      pages: []
    });
  });

  it('should handle ADD_FILTER', () => {
    const filter = {type: 'score', value: 1};
    expect(
      reducer(undefined, {
        type: ADD_FILTER,
        filter: filter
      })
    ).toEqual({
      filters: [filter],
      items: [],
      total: 1,
      page: 1,
      pages: []
    });
  });

  it('should handle REMOVE_FILTER', () => {
    const filter = {type: 'score', value: 1};
    expect(
      reducer({
        filters: [{type: 'score', value: 1}]
      }, {
        type: REMOVE_FILTER,
        filter: filter
      })
    ).toEqual({
      filters: [],
    });
  });
});