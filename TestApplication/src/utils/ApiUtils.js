import { testSelected } from '../actions/UserActions';
import { LOGIN_URL } from '../constants/URLconstants';

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
export function login(username,test){
	return dispatch =>{
		console.log('login func');
		dispatch(testSelected(username,test));
		return callApi(LOGIN_URL, {
			method: 'POST',
			headers: { 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8' },
			body: serialize({ username, test}),
		})
			.then(json => {
				console.log('function login',json);
				//dispatch(loginSuccess(email));
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
