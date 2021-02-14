import React, { useState } from 'react';
import { connect } from 'react-redux'
import { useMutation, gql } from '@apollo/client';
import { useHistory } from 'react-router';
import { login } from '../store/authActions'
import {customMutation} from '../store/mutations'

const LoginForm = (props) => {
  const history = useHistory();
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const handleClick = () => {
    const data = {
      email: formState.email,
      password: formState.password
    }
    const query = customMutation(data)
    console.log(query)
    props.login(query)
   
   
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

export default connect(null, {login})(LoginForm);
//export default LoginForm