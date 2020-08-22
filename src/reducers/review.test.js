import reducer from './review'
import { SET_REVIEW } from '../actions';

describe('review reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      filters: [],
      items: []
    })
  })

  it('should handle SET_REVIEW', () => {
    expect(
      reducer([], {
        type: SET_REVIEW,
        items: [{}]
      })
    ).toEqual({
      items: [{}]
    });
  })
});