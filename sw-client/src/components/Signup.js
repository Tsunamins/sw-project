import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router';
import { AUTH_TOKEN } from '../constants';

const SIGNUP_MUTATION = gql`
  mutation SignupMutation(
    $name: String!
    $username: String!
    $email: String!
    $photo: String
    $password: String!
    
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

              <label>Name</label><br/>
              <input type="text" 
                     value={formState.name}
                     onChange={e => setFormState(e.target.value)}
                     placeholder='Name'
              />

              <label>Username</label><br/>
              <input type="text" 
                     value={formState.username}
                     onChange={e => setFormState(e.target.value)}
                     placeholder='Username'
              />
              
              <br/>
              <label>Email</label><br/>
              <input type="text"
                     value={formState.email}
                     onChange={e => setFormState(e.target.value)}
                     placeholder='Email'
              />

              {/* note photo upload area */}
              
              <br/>
              <label>Password</label><br/>
              <input type="password"
                     value={formState.password}
                     onChange={e => setFormState(e.target.value)}
                     placeholder='Password'
              />
              
              <br/>
             
  
       
    
              <input className="button" type="submit" value="Submit" />
  
          </form>
      </div>
    );
  }

  export default Signup;

//work with mutation as action, import action