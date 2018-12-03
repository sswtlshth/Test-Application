import React,{Component } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'rc-progress';
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
        if(!answer){
            this.setState({
                errors : { "noOptionSelected" : "Please Select Option"}
            });
        }else{
            this.setState({
                errors : {}
            });
            if(currentQuestionNumber+1 === Object.keys(question.questions).length){
                dispatch(routerChange(RESULT_PATH));
            }else{
                dispatch(questionChange());
            }
            dispatch(checkAnswer(questionId,answer));
        }
    }
    render(){
        const { question } = this.props;
        const { questions, currentQuestionNumber } = question;
        const questionIds = Object.keys(questions);
        const totalQuestions = questionIds.length;
        let percentComplete = ((currentQuestionNumber+1) * 100)/totalQuestions;
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
                        <Line percent={percentComplete} strokeWidth="1" trailWidth="1" trailColor="#D9D9D9" strokeColor="#2db7f5" />
                        <button className="btn btn-success btn-lg" onClick={this.handleSubmit}>NEXT</button>
                    </div>
                </div>
            </div>
        )
    }
}

QuestionWrap.propTypes = propTypes;
export default QuestionWrap;