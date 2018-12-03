import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

export default function storeFactory(initialState) {
	const store = createStore(
		rootReducer,
		initialState,
		applyMiddleware(thunk) );
	return store;
}     
