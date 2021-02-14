import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router';
import { signup } from '../store/authActions'

const SignupForm = () => {
    const history = useHistory();
    const [formState, setFormState] = useState({
      name: '',
      username: '',
      email: '',
      photo: '',
      password: '',
    
    });

    const handleClick = () => {
      const data = {
        email: formState.email,
        password: formState.password
      }
  
        signup(data)
     
      setFormState({
        ...formState,
        name: "",
        username: "",
        email: "",
        photo: "",
        password: ""
      })
      history.push('/');
  
    }



    return (
        <div>
          <div>
             <input  
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        name: e.target.value
                      })}
                    placeholder='Name'
                    type="text"
              />

              <br/>

              <input  
                     value={formState.username}
                     onChange={(e) =>
                      setFormState({
                        ...formState,
                        username: e.target.value
                      })}
                     placeholder='Username'
                     type="text"
              />
              
              <br/>
              
              <input 
                     value={formState.email}
                     onChange={(e) =>
                      setFormState({
                        ...formState,
                        email: e.target.value
                      })}
                     placeholder='Email'
                     type="text"
              />
              
              <br/>

              <input 
                     value={formState.photo}
                     onChange={(e) =>
                      setFormState({
                        ...formState,
                        photo: e.target.value
                      })}
                     placeholder='Photo'
                     type="text"
              />
                 
              <br/>

              <input 
                     value={formState.password}
                     onChange={(e) =>
                      setFormState({
                        ...formState,
                        email: e.target.value
                      })}
                     placeholder='Password'
                     type="password"
              />

              </div>
           
             
              <div>
                <button onClick={handleClick}>Signup</button>
              </div>  
       
              <input className="button" type="submit" value="Submit" />
  
        
      </div>
    );
  }

  export default SignupForm;

//work with mutation as action, import action