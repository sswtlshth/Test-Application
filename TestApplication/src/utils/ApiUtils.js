import { FETCH_TEST, FETCH_QUESTIONS, CHECK_ANSWER } from '../constants/URLconstants';
import { DATA_URL } from '../config';
import { fetchQuestions, updateTestName, updateScore, updateQuestions } from '../actions/QuestionAction';

export function getTestNames(){
	return dispatch =>{
		dispatch(fetchQuestions());
		return callApi(DATA_URL+FETCH_TEST, {
			method: 'GET',
		})
		.then(json => {
			dispatch(updateTestName(json));
		})
		.catch(err => {
			console.log('error',err);
		});
	};
}

export function getQuestion(testName){
	return dispatch => {
		return callApi(DATA_URL+FETCH_QUESTIONS, {
			method: 'POST',
			headers: { 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8' },
			body: serialize({'test' :testName}),
		})
		.then(json => {
			dispatch(updateQuestions(json));
		})
		.catch(err => {
			console.log('error',err);
		});
	}
}

export function checkAnswer(questionId,answer){
	return dispatch => {
		return callApi(DATA_URL+CHECK_ANSWER, {
			method: 'POST',
			headers: { 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8' },
			body: serialize({'question_id' :questionId, 'answer': answer}),
		})
		.then(answerRespone => {
			if(answerRespone['correct']){
				dispatch(updateScore());
			}
		})
		.catch(err => {
			console.log('error',err);
		});
	}
}

export function callApi(URL,obj){
	const options = { ...obj, credentials: 'same-origin'};
	return fetch(URL, options)
		.then(response => {
			if (!response.ok) {
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