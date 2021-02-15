import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm'
import Nav from './containers/Nav'
import SignupForm from './components/SignupForm'
import Logout from './components/Logout'
import Welcome from './components/Welcome'
import Profile from './components/Profile'
import './styles/App.css';



class App extends React.Component {
  render(){
    const session = this.props.session

  return (
    <div className="App">
      <div><Nav /></div>
        <div>
          <Route exact path='/' component={Welcome}/>
          <Route exact path='/profile' component={Profile}/>
        </div>
      {!session ? <div>
          <Route exact path='/signup' component={SignupForm}/>
          <Route exact path='/login' component={LoginForm}/>
        </div>
       :

        <div>
          <Route exact path='/logout' component={Logout}/>
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

export default withRouter(connect(mapStateToProps)(App))
