import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { getQuestion } from '../utils/ApiUtils';
import { QUESTION_PATH } from '../constants/ActionTypes';
import { routerChange } from '../actions/RouterAction';
import { testSelected,changeUser } from '../actions/UserActions';
import Select from 'react-select';

const propTypes = {
    dispatch : PropTypes.func.isRequired,
    user : PropTypes.object.isRequired,
    question : PropTypes.object.isRequired,
}
class Login extends Component{
    constructor(){
        super();
        this.state = {
            errors: {},
            selectedOption: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTestOptionChange = this.handleTestOptionChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(getQuestion);
    }
    handleTestOptionChange = (selectedOption) => {
        const { dispatch } = this.props;
        dispatch(testSelected(selectedOption.value));
        this.setState({
            selectedOption : selectedOption
        })
      }
    handleNameChange(e){
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(changeUser(e.target.value));
    }
    handleSubmit(e){
        e.preventDefault();
        const { dispatch } = this.props;
        if(this.validateForm()){
            const { user } = this.props;
            const { testSelected } = user;
            dispatch(getQuestion(testSelected));
            dispatch(routerChange(QUESTION_PATH));
        }
    }
    validateForm(){
       let errors = {};
       let formIsValid = true;
       const { user } = this.props;
       const { username,testSelected} = user;
       if(username === undefined || username === null){
           errors["name"] = "Cannot be empty";
           formIsValid = false;
       }

       if( testSelected === undefined || testSelected === null){
           errors["test"] = " Select test";
           formIsValid = false;
       }
       this.setState({errors: errors});
       return formIsValid; 
    }
    render(){
        const { selectedOption } = this.state;
        const { question} = this.props;
        const { testNames } = question;
        const options = testNames.map(item => {
            return({'value' : item, 'label' : item});
        })
        return(
            <div className="login-main">
                <h1 className="main-title">Technical Task</h1>
                <label >Name</label>
                <input type="text" id="email" placeholder="Enter your name" onBlur={this.handleNameChange}/>
                <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                <label >Select Test</label><br/>
                <Select
                value={selectedOption}
                onChange={this.handleTestOptionChange}
                options={options}
                placeholder='Choose Test' />
                <span style={{color: "red"}}>{this.state.errors["test"]}</span>
                <button type="submit" onClick={this.handleSubmit}>Enter Test</button>
            </div>
        );
    }
}
Login.propTypes= propTypes;
export default Login;