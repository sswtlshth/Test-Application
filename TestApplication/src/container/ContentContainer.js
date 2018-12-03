import React ,{Component} from 'react';
import Content from '../components/Content';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
};

class ContentContainer extends Component{
	render(){
		return(
			<Content {...this.props} />
		);
	}  
}
ContentContainer.propTypes = propTypes;

function mapStateToProps(state){
	console.log(state);
	const { router } = state;
	return { router };
}

export default connect(mapStateToProps)(ContentContainer);