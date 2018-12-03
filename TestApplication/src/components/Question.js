import React,{Component } from 'react';
import PropTypes from 'prop-types';
import { updateAnswer } from '../actions/QuestionAction';

class Question extends Component{
    constructor(){
        super();
       // this.handleOptionClick = this.handleOptionClick.bind(this);
    }
    handleOptionClick(index,e){
        e.preventDefault();
        const { dispatch,questionId } = this.props;
        dispatch(updateAnswer(questionId,index));
        console.log("index", index);
    }
    renderOptions(){
        const {question} = this.props;
        const optionsDisplay = question.options.map( (ele) => {
            const onClickFunc = this.handleOptionClick.bind(this, ele);
            return(
                <div className="form-group col-md-6 col-xs-12" key={ele}>
                    <button key={ele} onClick={onClickFunc} className="btn btn-default btn-block">{ele}</button>
                </div>
            )
        });
        return optionsDisplay;
    }
    render(){
        const { question } = this.props;
        const { ques } =  question;
        console.log("question",question);
        return(
            <div className="container continer-fluid">
            <div className="jumbotron">
                <h2>{ques}</h2>
            </div>
                {this.renderOptions()}
            </div>
        );
    }
}

export default Question;