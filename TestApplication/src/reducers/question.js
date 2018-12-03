import * as types from '../constants/ActionTypes';
import initialState from './initialState';

export default function product(state=initialState.question,action){
	switch(action.type){
        case types.QUESTION_FETCHING:
		return { ...state,
			isFetching: true
		};
	case types.QUESTION_CHANGE:
		return { ...state,
			currentQuestionNumber : state.currentQuestionNumber+1,
			isFetching: false
		} ;
	case types.OPTION_SELECTED:
		return{
			...state,
			questions : {
				...state.questions,
				[action.questionId] : {
					...state.questions[action.questionId],
					answer : action.answer
				}
			}
		};
	case types.TEST_LIST_UPDATE:
		{
			return{
				...state,
					'testNames' : action.testNames
			}
		}
	case  types.QUESTION_LIST_UPDATE:
		{ 
			return{
				...state,
				'questions' : action.questions,
				'totalQuestion' : action.noOfQuestions
			}
		}
	case types.UPDATE_SCORE:{
			return{
				...state,
				'totalScore' : state.totalScore + 1	
			}
		}
	default:
		return state;
	}
}
