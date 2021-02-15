import React from 'react';
import { connect } from 'react-redux'

const Profile = (props) => {
    const session = props.session

  return (
    session ? 
   
    <div> 
        <h1>Profile</h1>

        <h3>Name: {props.session.name}</h3>
        <h3>Username: {props.session.username}</h3>
        <h3>Email: {props.session.email}</h3>
    </div>
    :
    <div></div> 
  );
    
};

const mapStateToProps = state => {
    console.log(state)
    return {
   
      session: state.authReducer.current
  
    }
  }


export default connect(mapStateToProps)(Profile);
