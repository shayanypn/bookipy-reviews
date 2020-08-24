
export const SET_PAGES = 'SET_PAGES';
export const SET_REVIEW = 'SET_REVIEW';
export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export const fetchReviews = (_page = 1) => {
	return (dispatch, getState) => {
		const { filters } = getState();
		// To READ
		// Also better to have a pattern for specifying
		// our API URL, as latter if it get complex, we
		// can easliy manage them
		const query = (filters || []).map(filter => `${filter.type}=${filter.value}`) || [];
		query.push('_limit=5');
		query.push(`_page=${_page}`);

		return fetch(`https://interview-task-api.bookiply.io/reviews?${query.join('&')}`)
		.then(res => {
			dispatch(setPages(_page, res.headers.get('X-Total-Count'), res.headers.get('Link')))
			return res.json();
		})
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

export const setPages = (current, totalItems, pages) => ({
	type: SET_PAGES,
	pages,
	totalItems,
	current
});
