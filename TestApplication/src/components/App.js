import React ,{ Component } from 'react';
import LoginContainer from '../container/LoginContainer';
import PropTypes from 'prop-types';

const propTypes = {
	dispatch : PropTypes.func.isRequired,
	user : PropTypes.object.isRequired,
};

class App extends Component {
  //check if authenticated,return mainpage.
  render() {
      return (
        <LoginContainer />
      );	
	}
}
App.propTypes = propTypes;
export default App;
