import React,{Component } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import { RESULT_PATH } from '../constants/ActionTypes';
import { routerChange } from '../actions/RouterAction';
import { questionChange } from '../actions/QuestionAction';
import { checkAnswer } from '../utils/ApiUtils';

const propTypes = {
	dispatch : PropTypes.func.isRequired,
	question : PropTypes.object.isRequired,
};
class QuestionWrap extends Component{

    constructor(){
        super();
        this.state = {
            errors: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e){
        e.preventDefault();
        const {dispatch, question } = this.props;
        const { questions,currentQuestionNumber } = question;
        const questionIds = Object.keys(questions);
        const questionId = questionIds[currentQuestionNumber];
        const currentQuestion = questions[questionId];
        const { answer } = currentQuestion;
        console.log("current question",currentQuestion);
        console.log("answer",answer);
        if(!answer){
            this.setState({
                errors : { "noOptionSelected" : "Please Select Option"}
            });
        }else{
            if(currentQuestionNumber+1 === Object.keys(question.questions).length){
                dispatch(routerChange(RESULT_PATH));
            }else{
                dispatch(questionChange());
            }
            dispatch(checkAnswer(questionId,answer));
        }
        //send BE req to check ans
    }
    render(){
        const { question } = this.props;
        const { questions, currentQuestionNumber } = question;
        const questionIds = Object.keys(questions);
        const questionId = questionIds[currentQuestionNumber];
        return(
            <div>
               <Question 
                    questionId = {questionId}
                    question = {questions[questionId]}
                    dispatch = { this.props.dispatch}    
                />
                <div className="container container-fluid">
                    <div className="form-group text-center">
                        <span style={{color: "red"}}>{this.state.errors["noOptionSelected"]}</span><br/>
                        <button className="btn btn-success btn-lg" onClick={this.handleSubmit}>NEXT</button>
                    </div>
                </div>
            </div>)
    }
}

QuestionWrap.propTypes = propTypes;
export default QuestionWrap;