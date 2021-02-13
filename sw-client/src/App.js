import './styles/App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm'

class App extends React.Component {
  render(){
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
 
    sessionUser: state.authReducer.current

  }
}

export default withRouter(connect(mapStateToProps)(App))
