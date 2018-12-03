    import React ,{ Component } from 'react';
    import PropTypes from 'prop-types';
    
    const propTypes = {
        dispatch : PropTypes.func.isRequired,
       // router : PropTypes.object.isRequired,
    };
    
    class MainMenu extends Component {
      //check if authenticated,return mainpage.
      render() {
            return(
            <div>Question</div>
            );
        }
    }
MainMenu.propTypes = propTypes;
    
export default MainMenu;
    
