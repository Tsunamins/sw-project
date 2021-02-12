import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router';
import { AUTH_TOKEN } from '../constants';

const LOGIN_MUTATION = gql`
  mutation LoginMutation(
    $email: String!
    $password: String!
  ) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

//note handlesubmit

const Login = () => {
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
          localStorage.setItem(AUTH_TOKEN, login.token);
          history.push('/');
        }
      });

    return (
       
        <div className='form'>
          <form onSubmit={handleSubmit}>

              
              
              <br/>
              <label>Email</label><br/>
              <input type="text"
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                     placeholder='Email'
              />

              
              <br/>
              <label>Password</label><br/>
              <input type="password"
                     value={password}
                     onChange={e => setFormState(e.target.value)}
                     placeholder='Password'
              />
              
              
              <br/>
    
              <input className="button" type="submit" value="Submit" />
  
          </form>
      </div>
    );
  }

  export default Login;