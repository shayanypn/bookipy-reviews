import reducer from './review'
import { SET_REVIEW, ADD_FILTER, REMOVE_FILTER } from '../actions';

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