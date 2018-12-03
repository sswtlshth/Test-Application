import React ,{Component} from 'react';
import App from '../components/App';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const propTypes = {
	dispatch: PropTypes.func.isRequired,
};

class AppContainer extends Component{
	render(){
		return(
			<App {...this.props} />
		);
	}  
}
AppContainer.propTypes = propTypes;

function mapStateToProps(state){
	console.log(state);
	const { user } = state;
	return { user };
}

export default connect(mapStateToProps)(AppContainer);