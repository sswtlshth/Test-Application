import React ,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import QuestionWrap from '../components/QuestionWrap';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
};

class QuestionContainer extends Component{
	render(){
		return(
			<QuestionWrap {...this.props} />
		);
	}  
}
QuestionContainer.propTypes = propTypes;

function mapStateToProps(state){
	console.log(state);
	const { question } = state;
	return { question };
}

export default connect(mapStateToProps)(QuestionContainer);