
export const SET_REVIEW = 'SET_REVIEW';
export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export const fetchReviews = (items) => {
	return (dispatch, getState) => {
		const { review:{ filters } } = getState();
		// To READ
		// Also better to have a pattern for specifying
		// our API URL, as latter if it get complex, we
		// can easliy manage them
		const query = filters.map(filter => `${filter.type}=${filter.value}`)
									.join('&');

		return fetch(`https://interview-task-api.bookiply.io/reviews?${query}`)
		.then(res => res.json())
		.then(res => dispatch(setReviews(res)))
		.catch(
			err => console.log(err)
			// TODO handle later
		);
	}
}

export const setReviews = (items) => ({
	type: SET_REVIEW,
	items
});

export const addFilter = (filter) => ({
	type: ADD_FILTER,
	filter
});

export const removeFilter = (filter) => ({
	type: REMOVE_FILTER,
	filter
});

