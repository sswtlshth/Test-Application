import  { QUESTION_LIST_FETCHING, QUESTION_CHANGE, OPTION_SELECTED, TEST_LIST_UPDATE} from '../constants/ActionTypes';

export function updateTestName(testNames){
  return{
    type: TEST_LIST_UPDATE,
    testNames
  }
}
export function fetchQuestions(){
    return {
        type : QUESTION_LIST_FETCHING
    }
}

export function questionChange(){
   return{
        type: QUESTION_CHANGE
   }
}

export function updateAnswer(questionId,answer){
    return {
        type : OPTION_SELECTED,
        questionId,
        answer
    }
}
