import { gql } from '@apollo/client';
import { login } from './authActions'



export const LOGIN_MUTATION = gql`
  mutation LoginMutation(
    $email: String!
    $password: String!
  ) {
    login(email: $email, password: $password) {
      token,
      user{
        email,
        username,
        name,
        photo
      }
    }
  }
`;

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

export const customMutation = (data) => {
  const query = `mutation {
        login(email: "${data.email}", password: "${data.password}") {
          token
          user {
            email
            username
            name
           
            }
          }
        }`
        return query
}