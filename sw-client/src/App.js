import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm'
import './styles/App.css';



class App extends React.Component {
  render(){
    console.log(this.state)
    console.log(this.props)

  return (
    <div className="App">
      <LoginForm />
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
