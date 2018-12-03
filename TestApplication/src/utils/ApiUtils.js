import { testSelected } from '../actions/UserActions';
import { LOGIN_URL,FETCH_TEST } from '../constants/URLconstants';
import { DATA_URL } from '../config';
import { fetchQuestions, updateTestName } from '../actions/QuestionAction';

/* const BASE_URL = 'http://localhost:3080';
const AUTH_URL= 'http://localhost:3080/login';

 export function fetchCategories(){
	return dispatch => {
		const url = BASE_URL+GET_CATEGORIES;
		dispatch(fetchCategories);
		return callApi(url,{
			method: 'GET',
		}).then(json => {
			console.log('categories fetch',json);
			dispatch(fetchCategoriesCompleted(json));
		}).catch(err => {
			console.log('error in fetching repository');
		})
	}
} */
export function getTestNames(){
	return dispatch =>{
		console.log('test function',DATA_URL);
		dispatch(fetchQuestions());
		return callApi(DATA_URL+FETCH_TEST, {
			method: 'GET',
		})
			.then(json => {
				console.log('function login',json);
				dispatch(updateTestName(json));
			})
			.catch(err => {
				console.log('error',err);
			//	dispatch(loginFail());
				// throw err;
			});
	};
}

export function getQuestion(){
	//callApi(QUESTION_PATH);
}
export function callApi(URL,obj){
	const options = { ...obj, credentials: 'same-origin'};
	return fetch(URL, options)
		.then(response => {
			if (!response.ok) {
				console.log('response ok',response);
				return response.text();
			}
			const data = response.json();
			return data;
		})
		.catch(err => { throw err; });
}

export function serialize(obj) {
	return Object.keys(obj).map(key =>
		`${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`
	).join('&');
}



export function fetchCategories(){
	/*return dispatch => {
		const url = BASE_URL+GET_CATEGORIES;
		dispatch(fetchCategories);
		return callApi(url,{
			method: 'GET',
		}).then(json => {
			console.log('categories fetch',json);
			dispatch(fetchCategoriesCompleted(json));
		}).catch(err => {
			console.log('error in fetching repository');
		})
	}*/
}
