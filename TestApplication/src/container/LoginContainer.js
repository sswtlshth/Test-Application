import React, {Component} from 'react';
import Login from '../components/Login';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

class LoginContainer extends Component{
    render(){
        return(
            <Login {...this.props} />
        )
    }
}

LoginContainer.propTypes= propTypes;
function mapStateToProps(state){
    const { user,question } = state; 
    return {user,question }
}

export default connect(mapStateToProps)(LoginContainer);
