import { LOGIN_PATH } from "../constants/ActionTypes";

export default {
    user: {
        username : null,
        testSelected: null
    },
    question: {
       testNames : [],
       questions : {
            1 : {
                'ques' : "What is Java",
                'options' : ['a', 'bb','ccc','dddd'],
            }
        },
        currentQuestionNumber: 0,
        totalQuestion: 0,
        totalScore: 0,
        isFetching: false
    },
    router: {
        route : LOGIN_PATH
    }
}
