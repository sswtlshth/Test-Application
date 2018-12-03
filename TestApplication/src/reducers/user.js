import * as types from '../constants/ActionTypes';
import initialState from './initialState';

export default function user(state=initialState.user,action){
	switch(action.type){
		case types.TEST_SELECTED:
			return { ...state,
				testSelected : action.test,
			};
		case types.USER_CHANGED : 
			return {
				...state,
				username : action.username,
			};
		default: 
			return state;
	}
}