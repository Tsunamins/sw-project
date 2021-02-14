import React, { useState } from 'react';
import { connect } from 'react-redux'
import { useMutation, gql } from '@apollo/client';
import { auth } from '../store/authActions'
import { loginMutation } from '../store/mutations'

const LoginForm = (props) => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const handleClick = () => {
    const data = {
      email: formState.email,
      password: formState.password
    }

    const mut = loginMutation(data)
    props.auth(mut)
   
    setFormState({
      ...formState,
      email: "",
      password: ""
    })

    props.history.push('/profile');

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

export default connect(null, { auth })(LoginForm);
