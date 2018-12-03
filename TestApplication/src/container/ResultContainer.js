import React ,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Result from '../components/Result';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
};

class ResultContainer extends Component{
	render(){
		return(
			<Result {...this.props} />
		);
	}  
}
ResultContainer.propTypes = propTypes;

function mapStateToProps(state){
	const { user,question } = state;
	return { user,question };
}

export default connect(mapStateToProps)(ResultContainer);