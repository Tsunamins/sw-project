import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Nav extends React.Component {
  
    render(){
      const session = this.props.session
      return (
          <div id="Nav" >
                <div>
                    <Link to="/">Welcome</Link> |
                    <Link to="/profile">Profile</Link> 

                </div>
                {console.log(session === null)}
                {!session ?
                 <div id="AuthLinks">
                  <Link to="/signup">Sign Up</Link> |
                  <Link to="/login">Log In</Link>
                 </div>
               
                :
               
                <div>
                    <Link to="/logout">Logout</Link>
                </div>
                }
        </div>
      );
    }
  }
 
  const mapStateToProps = state => {
    console.log(state)
    return {
   
      session: state.authReducer.current
  
    }
  }


export default connect(mapStateToProps)(Nav);