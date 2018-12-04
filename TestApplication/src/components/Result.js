import React ,{ Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	dispatch : PropTypes.func.isRequired,
    user : PropTypes.object.isRequired,
    question : PropTypes.object.isRequired,
};

class Result extends Component {
  render() {
    const { user } = this.props;
    const { question } = this.props;
    const {username} = user;
    const { totalScore, totalQuestion } = question;

    return (
        <div className="container container-fluid" >
            <div className="jumbotron text-xs-center header--main" >
                <h1>Thanks,{ username}</h1>
                <div>
                    <br></br>
                    <h3>You responded correctly to <b>{totalScore}</b> out of <b>{totalQuestion}</b> questions</h3>
                 </div>
            </div>  
        </div>
      );	
	}
}
Result.propTypes = propTypes;
export default Result;
