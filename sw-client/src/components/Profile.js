import React from 'react';
import { connect } from 'react-redux'
import { getImage } from '../store/authActions'

const Profile = (props) => {
    const session = props.session
    let image;

    
  return (
    session ? 
    
    <div>
        {/* {image = getImage(props.session.photo)} */}
        {/* {console.log(image)} */}
        {console.log(props.session.photo)}
        <h1>Profile</h1>
        <img src={image}/>
        <img src="https://images.unsplash.com/photo-1570534536531-c3def02ad855?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
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
