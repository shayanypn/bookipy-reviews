import { combineReducers } from 'redux';
import review from './review';

// Just to show the case, when we 
// have more reduce, otherwise we 
// don't need this
const rootReducer = combineReducers({
	review,
});

export default rootReducer;