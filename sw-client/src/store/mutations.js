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

export const loginMutation = (data) => {
  const query = `mutation {
        login(email: "${data.email}", password: "${data.password}") {
          token
          user {
            email
            username
            name
            photo
           
            }
          }
        }`
        return query
}

export const signupMutation = (data) => {
  const query = `mutation {
        signup(name: "${data.name}", username: "${data.username}", email: "${data.email}", photo: "${data.photo}:, password: "${data.password}") {
          token
          user {
            email
            username
            name
            photo
           
            }
          }
        }`
        return query
}