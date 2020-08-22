
export const SET_REVIEW = 'SET_REVIEW';

export const fetchReviews = (items) => {
	return dispatch => {
		// To READ
		// Also better to have a pattern for specifying
		// our API URL, as latter if it get complex, we
		// can easliy manage them
		return fetch('https://interview-task-api.bookiply.io/reviews')
		.then(res => res.json())
		.then(res => {
			dispatch(setReviews(res))
		})
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
