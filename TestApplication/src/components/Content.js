import React,{Component } from 'react';
import PropTypes from 'prop-types';
import { LOGIN_PATH, QUESTION_PATH, RESULT_PATH } from '../constants/ActionTypes';
import LoginContainer from '../container/LoginContainer';
import QuestionContainer from '../container/QuestionContainer';
import ResultContainer from '../container/ResultContainer';

const propTypes = {
	dispatch : PropTypes.func.isRequired,
	router : PropTypes.object.isRequired,
};

class Content extends Component{

    render(){
        const { router } = this.props;
        const { route } = router;
        console.log("router", router)
        switch(route){
            case LOGIN_PATH : {
                return (<LoginContainer/>);
            }
            case QUESTION_PATH :  {
                return (<QuestionContainer/>);
            }
            case RESULT_PATH  : {
                return (<ResultContainer />);
            }
            default : return null;
        }
        
    }

}

Content.propTypes = propTypes
export default Content;