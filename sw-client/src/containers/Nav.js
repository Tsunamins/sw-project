import React from 'react'
import { Link, Route } from 'react-router-dom'
import LoginForm from '../components//LoginForm'
import SignupForm from '../components//SignupForm'

class Nav extends React.Component {

    render(){
      return (
          <div id="Nav" >
                <div id="AuthLinks">
                    <Link to="/signup">Sign Up</Link> 
                    <Link to="/login">Log In</Link>
                    <Route exact path='/signup' component={SignupForm}/>
                    <Route exact path='/login' component={LoginForm}/>
                </div> 
        </div>
      );
    }
  }
 
export default Nav;