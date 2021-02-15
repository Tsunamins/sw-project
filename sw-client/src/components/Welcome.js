import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Welcome = (props) => {
    console.log(props)
    const session = props.session
  return (
    <div>
        <div> 
            <h1>Welcome to The Form!</h1>
        </div>
    {session ? 
        <div><Link to="/profile">Go To Profile</Link></div>
    :
        
        <div><Link to="/signup">Sign Up</Link> |
            <Link to="/login">Log In</Link>
        </div>
    }
    </div>
  );
};

const mapStateToProps = state => {
    console.log(state)
    return {
   
      session: state.authReducer.current
  
    }
  }

export default connect(mapStateToProps)(Welcome);
