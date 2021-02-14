import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm'
import Nav from './containers/Nav'
import SignupForm from './components/SignupForm'
import Welcome from './components/Welcome'
import Profile from './components/Profile'
import './styles/App.css';



class App extends React.Component {
  render(){
    console.log(this.state)
    console.log(this.props)

  return (
    <div className="App">
      <div><Nav /></div>
      <div>
        <Route exact path='/' component={Welcome}/>
        <Route exact path='/profile' component={Profile}/>
        <Route exact path='/signup' component={SignupForm}/>
        <Route exact path='/login' component={LoginForm}/>
      </div>
      
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
