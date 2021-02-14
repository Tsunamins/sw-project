import { AUTH_TOKEN } from '../constants';

export const auth = (mut) => {
    console.log(mut)
    // console.log(JSON.stringify({
    //     query: mut,
    //     variables: {}
    // }))
      return dispatch => {
          fetch("http://localhost:4000/", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: 'POST',
            body: mut,
            redirect: 'follow'
        })

        // JSON.stringify({
        //     query: mut,
        //     variables: {}
        // })

        
        .then(resp => resp.json())
        .then(response => {
            if(response.errors){
                console.log("if error:", response)
                alert(response.errors)
            } else {
                console.log(response)
                if(!response.data.login.user){
                    console.log(response.data.signup.user)
                    localStorage.setItem(AUTH_TOKEN, response.data.signup.user.token);
                //maybe separate dispatch for token, if interested in creating a time out function
                    dispatch(session(response.data.signup.user))
                } else {
                    localStorage.setItem(AUTH_TOKEN, response.data.login.user.token);
                    dispatch(session(response.data.login.user))

                }
            }
        })
        .catch(console.log);

    }
}

export const tempSignup = () => {



var graphql = JSON.stringify({
  query: `mutation {
    signup(username: "postmanuser3", name: "Postman3", email: "postman3@sobe.com", password: "password", photo: "filename") {
      token
      user {
        id
        name
        username
        email
        photo
        
      }
    }
  }`,
  variables: {}
})
var requestOptions = {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: graphql,
  redirect: 'follow'
};

fetch("http://localhost:4000/", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}



export const session = user => {
    console.log(user)
    return {
        type: "SESSION_USER",
        user
    }
}












