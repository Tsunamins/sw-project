import { AUTH_TOKEN } from '../constants';

export const login = (data) => {
      return dispatch => {
          fetch("http://localhost:4000/", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: 'POST',
            body: JSON.stringify({
                query: "mutation {\n  login(email: \"graycie@sobe.com\", password: \"password\") {\n    token\n    user {\n      email\n      username\n      name\n     \n      }\n    }\n  }",
                variables: {}
            })
        })

        
        .then(resp => resp.json())
        .then(response => {
            if(response.error){
                alert(response.error)
            } else {
                console.log(response.data.login.user)
                //local storage
                //maybe separate dispatch for token
                dispatch(session(response.data.login.user))
            }
        })
        .catch(console.log);

    }
}


export const session = user => {
    console.log(user)
    return {
        type: "SESSION_USER",
        user
    }
}












