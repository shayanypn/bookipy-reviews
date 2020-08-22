import configureMockStore from 'redux-mock-store'
import { mockStore } from '../testUtils'
import fetchMock from 'fetch-mock'
import { fetchReviews, setReviews, SET_REVIEW } from './index';

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

});

