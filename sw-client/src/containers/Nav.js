import React from 'react'
import { Link } from 'react-router-dom'


class Nav extends React.Component {

    render(){
      return (
          <div id="Nav" >
                <div>
                    <Link to="/">Welcome</Link> 
                    <Link to="/profile">Profile</Link> 

                </div>
                
                <div id="AuthLinks">
                    <Link to="/signup">Sign Up</Link> 
                    <Link to="/login">Log In</Link>
                   
                </div> 
        </div>
      );
    }
  }
 
export default Nav;