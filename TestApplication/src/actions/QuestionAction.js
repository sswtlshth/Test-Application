import  { QUESTION_LIST_FETCHING, QUESTION_CHANGE, OPTION_SELECTED, TEST_LIST_UPDATE, QUESTION_LIST_UPDATE, UPDATE_SCORE} from '../constants/ActionTypes';

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
export function updateQuestions(questions){
    let noOfQuestions = Object.keys(questions).length;
    return{
        type: QUESTION_LIST_UPDATE,
        questions,
        noOfQuestions
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
//Assuming only positive point for correct answer
export function updateScore(){
    return {
        type : UPDATE_SCORE
    }
}

