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
        console.log(`Option selected:`, selectedOption.value);
        dispatch(testSelected(selectedOption.value));
        this.setState({
            selectedOption : selectedOption
        })
      }
    handleNameChange(e){
        e.preventDefault();
        const { dispatch } = this.props;
        console.log('name',e.target.value);
        dispatch(changeUser(e.target.value));
    }
    handleSubmit(e){
        e.preventDefault();
        const { dispatch } = this.props;
        if(this.validateForm()){
            const { user } = this.props;
            const { testSelected } = user;
            console.log("test question fetxh",testSelected);
            dispatch(getQuestion(testSelected));
            dispatch(routerChange(QUESTION_PATH));
            console.log("submit button event",e);
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
            <div className="container continer-fluid">
            <div className="jumbotron">
                <h1>Technical Task</h1>
            </div>
            <div className="form-group">
                <label form="email">Enter Name:</label>
                <input type="text" className="form-control" id="email" placeholder="Enter your name" onBlur={this.handleNameChange}/>
                <span style={{color: "red"}}>{this.state.errors["name"]}</span>
            </div>
            <div className="form-group">
                <Select
                value={selectedOption}
                onChange={this.handleTestOptionChange}
                options={options}
                placeholder='Choose Test' />
                <span style={{color: "red"}}>{this.state.errors["test"]}</span>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-success pad-top-5" onClick={this.handleSubmit}>Enter Test</button>
            </div>
            </div>
        );
    }
}
Login.propTypes= propTypes;
export default Login;