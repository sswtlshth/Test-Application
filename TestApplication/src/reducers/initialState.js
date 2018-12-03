import { LOGIN_PATH } from "../constants/ActionTypes";

export default {
    user: {
        username : null,
        testSelected: null
    },
    question: {
       testNames : ["java","python"],
       questions : {
            1 : {
                'ques' : "What is Java",
                'options' : ['a', 'bb','ccc','dddd'],
            }
        },
        currentQuestionNumber: 0,
        totalQuestion: 4,
        totalScore: 3,
        isFetching: false
    },
    router: {
        route : LOGIN_PATH
    },
    errors: {
        loginErrors: {
            
        },
    }
}