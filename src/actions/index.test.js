import configureMockStore from 'redux-mock-store'
import { mockStore } from '../testUtils'
import fetchMock from 'fetch-mock'
import {
	fetchReviews, setReviews, SET_REVIEW, addFilter, removeFilter, ADD_FILTER, REMOVE_FILTER } from './index';

describe('actions', () => {
	let store = null;

	beforeEach(()=>{
		store = mockStore({
			review: {
				filters: [],
				items: []
			}
		});
	});

	it('setReviews', () => {
		const items = [{}],
		expectedAction = [{
			type: SET_REVIEW,
			items: items
		}];

		store.dispatch(setReviews(items));
		expect(store.getActions()).toEqual(expectedAction);
	});

	it('fetchReviews', () => {
	    fetchMock.sandbox().mock('/reviews', {
	      body: [{}],
	      headers: { 'content-type': 'application/json' }
	    })

		const items = [{}],
		expectedAction = [{
			type: SET_REVIEW,
			items: items
		}];

		store.dispatch(fetchReviews()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
		fetchMock.restore();
	})

	it('addFilter', () => {
		const filter = {type: 'score', value: 1},
		expectedAction = [{
			type: ADD_FILTER,
			filter: filter
		}];
		store.dispatch(addFilter(filter));
		expect(store.getActions()).toEqual(expectedAction);
	});

	it('removeFilter', () => {
		const filter = {type: 'score', value: 1},
		expectedAction = [{
			type: REMOVE_FILTER,
			filter: filter
		}];
		store.dispatch(removeFilter(filter));
		expect(store.getActions()).toEqual(expectedAction);
	});

});

