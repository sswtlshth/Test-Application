import * as types from '../constants/ActionTypes';
import initialState from './initialState';

export default function user(state=initialState.user,action){
    console.log('action',action);
	switch(action.type){
		case types.TEST_SELECTED:
		console.log("TEST_SELECTED",action.testSelected);
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