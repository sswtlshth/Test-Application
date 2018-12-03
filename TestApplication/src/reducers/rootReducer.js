import {combineReducers} from 'redux';
import user from '../reducers/user';
import question from '../reducers/question';
import router from '../reducers/router';
const rootReducer = combineReducers(
	{
		user,
		router,
		question,
	}
);

export default rootReducer;