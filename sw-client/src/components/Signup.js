import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router';
import { AUTH_TOKEN } from '../constants';

const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $email: String!
    $password: String!
    $name: String!
  ) {
    signup(
      name: $name
      username: $username
      email: $email
      photo: $photo
      password: $password
      
    ) {
      token
    }
  }
`;

//note handlesubmit

const Signup = () => {
    const history = useHistory();
    const [formState, setFormState] = useState({
      name: '',
      username: '',
      email: '',
      photo: '',
      password: '',
    
    });

    const [signup] = useMutation(SIGNUP_MUTATION, {
        variables: {
          name: formState.name,
          username: formState.username,
          email: formState.email,
          photo: formState.photo,
          password: formState.password
        },
        //note
        onCompleted: ({ signup }) => {
          localStorage.setItem(AUTH_TOKEN, signup.token);
          history.push('/');
        }
    });

    return (
       
        <div className='form'>
          <form onSubmit={handleSubmit}>

              <label>Username</label><br/>
              <input type="text" 
                     value={username}
                     onChange={e => setFormState(e.target.value)}
                     placeholder='Username'
              />

              <label>Username</label><br/>
              <input type="text" 
                     value={username}
                     onChange={e => setFormState(e.target.value)}
                     placeholder='Username'
              />
              
              <br/>
              <label>Email</label><br/>
              <input type="text"
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                     placeholder='Email'
              />

              {/* note photo upload area */}
              
              <br/>
              <label>Password</label><br/>
              <input type="password"
                     value={password1}
                     onChange={e => setFormState(e.target.value)}
                     placeholder='Password'
              />
              
              <br/>
              <label>Confirm Password</label><br/>
              <input type="password"
                     value={password2}
                     onChange={e => setFormState(e.target.value)}
                     placeholder='Enter same password'
              />
  
              <br/>
    
              <input className="button" type="submit" value="Submit" />
  
          </form>
      </div>
    );
  }

  export default Signup;

//work with mutation as action, import action