import * as types from '../constants/ActionTypes';
import initialState from './initialState';

export default function router(state=initialState.router,action){
	switch(action.type){
        case types.CHANGE_ROUTE:
		return { ...state,
			route: action.route
		};
	default: 
		return state;
	}
}