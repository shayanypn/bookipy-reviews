import configureMockStore from 'redux-mock-store'
import { mockStore } from '../testUtils'
import fetchMock from 'fetch-mock'
import {
	fetchReviews,
	setReviews,
	addFilter,
	removeFilter,
	ADD_FILTER,
	REMOVE_FILTER,
	SET_REVIEW,
	SET_PAGES
} from './index';

describe('actions', () => {
	let store = null;

	const mockData = [
	  {
	    headline: "Amazing Pool!",
	    comment: "Mauris justo ante, pulvinar eget consequat at, bibendum et lorem. Suspendisse lacus urna, fringilla sit amet commodo eget, condimentum et nisl. Pellentesque elit mi, porta in mi at, vulputate mattis lacus.",
	    author: "Alissa Stacey",
	    positiveFeedback: "The location is perfect",
	    negativeFeedback: null,
	    score: 4.1,
	    channel: "AIRBNB",
	    publishedAt: "2020-08-11T12:20:02.340Z"
	  },
	  {
	    headline: "Very nice host, and quite chill place.",
	    comment: "Nulla dictum ligula ac tortor egestas, sit amet ullamcorper risus sollicitudin. Morbi vitae leo accumsan, interdum ligula non, placerat ligula. Ut faucibus congue purus, vitae semper sapien viverra non. Pellentesque rhoncus porttitor diam, eu ultrices metus dictum at.",
	    author: "Alissa Stacey",
	    positiveFeedback: "The location is perfect",
	    negativeFeedback: "No parking spot.",
	    score: 4,
	    channel: "HOLIDU",
	    publishedAt: "2020-08-11T12:20:02.340Z"
	  },
	  {
	    headline: "Location is perfect!!",
	    comment: "Morbi porttitor nisl ipsum, a facilisis purus euismod eu. Praesent consequat interdum nisi ut auctor. Sed posuere est porta neque pretium viverra. Nulla vel finibus nulla.",
	    author: "Amirah Brandt",
	    positiveFeedback: "Everything you need is there",
	    negativeFeedback: null,
	    score: 4.1,
	    channel: "HOLIDU",
	    publishedAt: "2020-08-11T12:20:02.340Z"
	  },
	  {
	    headline: "Very nice host, and quite chill place.",
	    comment: "Donec lacus mi, tincidunt a pulvinar sed, malesuada sed nunc. Nullam euismod ultricies elit. Integer et magna et tortor viverra malesuada eget vitae eros. Mauris vitae ultricies mi.",
	    author: "Kaisha Melton",
	    positiveFeedback: "The location is perfect",
	    negativeFeedback: "A bit dusty",
	    score: 4,
	    channel: "BOOKINGCOM",
	    publishedAt: "2020-08-11T12:20:02.340Z"
	  },
	  {
	    headline: "Very nice host, and quite chill place.",
	    comment: "Nulla dictum ligula ac tortor egestas, sit amet ullamcorper risus sollicitudin. Morbi vitae leo accumsan, interdum ligula non, placerat ligula. Ut faucibus congue purus, vitae semper sapien viverra non. Pellentesque rhoncus porttitor diam, eu ultrices metus dictum at.",
	    author: "Alissa Stacey",
	    positiveFeedback: null,
	    negativeFeedback: null,
	    score: 4.3,
	    channel: "HOLIDU",
	    publishedAt: "2020-08-11T12:20:02.340Z"
	  }
	];

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

	it('fetchReviews', (done) => {
	    fetchMock.sandbox().mock('/reviews?_limit=5&_page=1', {
	      body: [{}],
	      headers: { 'content-type': 'application/json' }
	    });
		const expectedAction = [{
			type: SET_PAGES,
			current: 1,
			totalItems: '30',
			pages: "<http://interview-task-api.bookiply.io/reviews?_limit=5&_page=1>; rel=\"first\", <http://interview-task-api.bookiply.io/reviews?_limit=5&_page=2>; rel=\"next\", <http://interview-task-api.bookiply.io/reviews?_limit=5&_page=6>; rel=\"last\""
		}, {
			type: SET_REVIEW,
			items: mockData
		}];

		store.dispatch(fetchReviews()).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
			done();
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

