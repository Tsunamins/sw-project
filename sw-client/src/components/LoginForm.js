import React, { useState } from 'react';
//import { connect } from 'react-redux'
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router';
import { AUTH_TOKEN } from '../constants';
import { LOGIN_MUTATION } from '../store/mutations'
import { loginUser } from '../store/authActions'


//start adding store, actions, reducers

const LoginForm = () => {
  const history = useHistory();
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password
    },
    onCompleted: ({ login }) => {
      console.log(login)
      loginUser(login)
     }
  }); 
  
  const handleClick = () => {
    login()
   
    setFormState({
      ...formState,
      email: "",
      password: ""
    })
    history.push('/');

  }

  return (
    <div>
    
      <div>
      
        <input
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value
            })
          }
          type="text"
          placeholder="Email"
        />

        <br/>

        <input
          value={formState.password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value
            })
          }
          type="password"
          placeholder="Password"
        />
      </div>

      <div>
        <button onClick={handleClick}>Login</button>
      </div>

    </div>
  );
};

//export default connect(null, {loginUser})(LoginForm);
export default LoginForm