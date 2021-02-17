import React, { useState } from 'react';
import { connect } from 'react-redux'
import { gql, useMutation } from '@apollo/client';
import { auth, upload, uploadStream } from '../store/authActions'
import { signupMutation } from '../store/mutations'

const SignupForm = (props) => {
    const [formState, setFormState] = useState({
      name: '',
      username: '',
      email: '',
      photo: '',
      selectedFile: '',
      password: '',
    
    });

    const handleUpload = () => {
      const uploadResp = uploadStream(formState.selectedFile, formState.selectedFile.name)
      console.log(uploadResp)
      
      console.log(formState)
    }



    const handleClick = () => {
      const data = {
        name: formState.name,
        username: formState.username,
        email: formState.email,
        photo: formState.selectedFile.name,
        password: formState.password
      }

      //upload(formState.selectedFile, formState.selectedFile.name)

      //const mutate = signupMutation(data)
  
      //props.auth(mutate)

      setFormState({
        ...formState,
        name: "",
        username: "",
        email: "",
        photo: "",
        selectedFile: "",
        password: ""
      })
      props.history.push('/profile');
  
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
                  type="file"
                  // value={formState.selectedFile}
                  // onChange={(e) => setSelectedFile(e.target.files[0])}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      selectedFile: e.target.files[0]
                    })}
                  
              />
              <button onClick={handleUpload}>Upload Photo</button>
            
              <br/>

              <input 
                     value={formState.password}
                     onChange={(e) =>
                      setFormState({
                        ...formState,
                        password: e.target.value
                      })}
                     placeholder='Password'
                     type="password"
              />

              </div>
           
             
              <div>
                <button onClick={handleClick}>Signup</button>
              </div>    
        
      </div>
    );
  }

  export default connect(null, { auth })(SignupForm);

