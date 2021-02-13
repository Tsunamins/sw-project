import './styles/App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm'

function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;
